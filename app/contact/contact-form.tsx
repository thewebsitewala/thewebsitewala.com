'use client'

import { useActionState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { sendEnquiry, type ContactState } from './actions'

const services = [
  'Web Development',
  'Digital Marketing',
  'SEO',
  'Graphic Designing',
  'App Development',
  'Something else',
]

const initialState: ContactState = {}

const fieldClass =
  'w-full bg-transparent border border-border px-4 py-3 text-base outline-none transition-colors focus:border-foreground placeholder:text-muted-foreground/60'
const labelClass =
  'block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2'

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, initialState)

  if (state.ok) {
    return (
      <div className="border border-border p-8 md:p-10">
        <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-6">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-light tracking-tight mb-3">
          Thanks — your message is on its way.
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          We've received your enquiry and will get back to you within one
          business day. For anything urgent, reach us on WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      {/* Honeypot — hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={fieldClass}
          />
          {state.fieldErrors?.name && (
            <p className="text-sm text-destructive mt-2">
              {state.fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={fieldClass}
          />
          {state.fieldErrors?.email && (
            <p className="text-sm text-destructive mt-2">
              {state.fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 / +44 ..."
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Service
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and timeline."
          className={`${fieldClass} resize-none`}
        />
        {state.fieldErrors?.message && (
          <p className="text-sm text-destructive mt-2">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      {state.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm uppercase tracking-wider px-8 py-4 transition-colors hover:bg-accent disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? 'Sending…' : 'Send Enquiry'}
        {!pending && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    </form>
  )
}
