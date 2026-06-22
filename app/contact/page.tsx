import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact — The Website Wala',
  description:
    'Get in touch with The Website Wala. Tell us about your project and we will get back to you within one business day.',
}

const offices = [
  {
    city: 'London',
    lines: ['4a Seven Ways Parade', 'Woodford Avenue', 'IG2 6XH, United Kingdom'],
    phone: '07349 584838',
    tel: '+447349584838',
  },
  {
    city: 'Mumbai',
    lines: [
      'Building No. 3A, Ss Amrutwar Marg',
      'Maya Nagar, Siddharth Nagar, Worli',
      'Mumbai, Maharashtra 400018',
    ],
    phone: '+91 76664 01860',
    tel: '+917666401860',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Contact
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight text-balance mb-6">
              Let's start something great
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tell us about your project and we'll get back to you within one
              business day. Prefer email? Reach us at{' '}
              <a
                href="mailto:info.thewebsitewala@gmail.com"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                info.thewebsitewala@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Details */}
            <div className="lg:col-span-5 space-y-12">
              {offices.map((office) => (
                <div key={office.city}>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {office.city}
                  </h2>
                  <address className="not-italic text-base leading-relaxed">
                    {office.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={`tel:${office.tel}`}
                    className="inline-block mt-3 hover:text-muted-foreground transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              ))}

              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Quick chat
                </h2>
                <a
                  href="https://wa.me/917666401860?text=Hi%20The%20Website%20Wala%2C%20I%27d%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-muted-foreground transition-colors"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
