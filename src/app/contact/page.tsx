import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Quote',
  description:
    'Request a free project consultation and quote from Qamar Construction. We build medical clinics, dental offices, and urgent care centers across Houston, TX.',
}

const contactMethods = [
  {
    icon: Phone,
    label: 'Call or Text',
    value: '(832) 766-9246',
    href: 'tel:+18327669246',
    description: 'Mon–Fri, 8am–6pm CST',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Message Us',
    href: 'https://wa.me/18327669246',
    description: 'Quick responses, any time',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@qamarconstruction.com',
    href: 'mailto:contact@qamarconstruction.com',
    description: 'We respond within 1 business day',
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Houston, TX & Surrounding',
    href: '/locations',
    description: 'Up to 40-mile radius from Houston',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg py-20 border-b border-brand-border overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute left-0 top-0 w-1 h-full bg-brand-gold" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Get In Touch</span>
          <h1 className="section-heading mt-2">
            Request a Free <span className="text-brand-gold">Quote</span>
          </h1>
          <p className="text-brand-muted mt-4 max-w-xl font-lato">
            Tell us about your project and we&apos;ll get back to you within one business day with
            a consultation appointment and preliminary project assessment.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Left: Contact info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-oswald text-2xl font-bold text-brand-text mb-6">
                  Talk to Our Team
                </h2>
                <p className="text-brand-muted font-lato text-sm leading-relaxed">
                  Whether you&apos;re in the planning phase or ready to break ground, we&apos;re here to answer
                  your questions and provide a clear project roadmap.
                </p>
              </div>

              <div className="space-y-5">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  const isExternal = method.external
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="flex items-start gap-4 p-4 bg-brand-surface border border-brand-border hover:border-brand-gold transition-colors group"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-brand-bg border border-brand-border group-hover:border-brand-gold transition-colors flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="font-oswald text-xs uppercase tracking-widest text-brand-muted mb-0.5">{method.label}</p>
                        <p className="font-lato text-sm text-brand-text group-hover:text-brand-gold transition-colors">{method.value}</p>
                        <p className="font-lato text-xs text-brand-muted mt-0.5">{method.description}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Response time note */}
              <div className="flex items-start gap-3 p-4 border-l-2 border-brand-gold bg-brand-surface">
                <Clock className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-oswald text-xs uppercase tracking-widest text-brand-gold mb-1">Typical Response Time</p>
                  <p className="text-brand-muted text-xs font-lato">
                    We respond to all inquiries within 1 business day. For urgent matters, call or WhatsApp us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-brand-surface border border-brand-border p-8">
                <h2 className="font-oswald text-xl font-bold text-brand-text mb-2">Project Inquiry Form</h2>
                <p className="text-brand-muted text-sm font-lato mb-8">
                  Share your project details and we&apos;ll prepare a tailored consultation.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
