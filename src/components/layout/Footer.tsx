import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const services = [
  { label: 'Medical Clinics',  href: '/medical-clinics' },
  { label: 'Dental Clinics',   href: '/dental-clinics'  },
  { label: 'Urgent Care',      href: '/urgent-care'     },
]

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Qamar Construction" width={44} height={44} className="object-contain" />
              <span className="font-oswald font-bold text-lg tracking-wide">
                QAMAR <span className="text-brand-gold">CONSTRUCTION</span>
              </span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Houston&apos;s trusted builder for medical clinics, dental offices, and urgent care centers.
              Turnkey design-build, done right.
            </p>
            <div className="gold-divider" />
            <p className="text-brand-muted text-xs uppercase tracking-widest font-oswald">
              Serving Houston &amp; Surrounding Areas
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-xs text-brand-gold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-brand-muted hover:text-brand-gold transition-colors text-sm font-lato flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-gold-dim flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3">
              <h4 className="font-oswald uppercase tracking-widest text-xs text-brand-gold">Quick Links</h4>
              {[
                { label: 'Service Locations', href: '/locations' },
                { label: 'Request a Quote',   href: '/contact'   },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="block text-brand-muted hover:text-brand-gold transition-colors text-sm font-lato flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-gold-dim flex-shrink-0" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-xs text-brand-gold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18327669246" className="flex items-start gap-3 text-brand-muted hover:text-brand-gold transition-colors group">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-lato">(832) 766-9246</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/18327669246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-brand-muted hover:text-brand-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-lato">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@qamarconstruction.com" className="flex items-start gap-3 text-brand-muted hover:text-brand-gold transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-lato">contact@qamarconstruction.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-brand-muted">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-lato">Houston, TX &amp; Surrounding Areas<br />(Up to 40-Mile Radius)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-brand-muted text-xs font-lato">
            &copy; {new Date().getFullYear()} Qamar Construction. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs font-lato">
            Houston, TX — Licensed &amp; Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
