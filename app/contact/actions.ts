'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().optional(),
  service: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Tell us a bit more (at least 10 characters)'),
})

export type ContactState = {
  ok?: boolean
  error?: string
  fieldErrors?: Partial<Record<'name' | 'email' | 'phone' | 'service' | 'message', string>>
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export async function sendEnquiry(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field.
  if (formData.get('company')) return { ok: true }

  const parsed = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  })

  if (!parsed.success) {
    const fieldErrors: ContactState['fieldErrors'] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof NonNullable<ContactState['fieldErrors']>
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message
    }
    return { error: 'Please fix the highlighted fields.', fieldErrors }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      error:
        'The email service is not configured yet. Add RESEND_API_KEY to your environment.',
    }
  }

  const { name, email, phone, service, message } = parsed.data
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'The Website Wala <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO_EMAIL || 'info.thewebsitewala@gmail.com'],
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New website enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
          ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
      text: [
        `New website enquiry`,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        service ? `Service: ${service}` : '',
        ``,
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    })

    if (error) {
      return {
        error:
          'Something went wrong sending your message. Please try again or email us directly.',
      }
    }

    return { ok: true }
  } catch {
    return { error: 'Something went wrong. Please try again in a moment.' }
  }
}
