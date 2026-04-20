import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-brand-border" style={{
      background: 'linear-gradient(180deg, #111115 0%, #0d0d10 100%)',
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 3px), linear-gradient(180deg, #111115 0%, #0d0d10 100%)',
    }}>

      {/* Logo showcase band */}
      <div className="border-b border-brand-border/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-5">
          <div className="relative">
            {/* Gold glow behind logo */}
            <div className="absolute inset-0 rounded-full blur-2xl opacity-20"
              style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)', transform: 'scale(2)' }} />
            <Image
              src="/logo.png"
              alt="Qamar Construction Logo"
              width={110}
              height={110}
              className="object-contain relative z-10 drop-shadow-2xl"
            />
          </div>
          <div className="text-center">
            <p className="font-oswald font-bold text-2xl tracking-widest text-brand-text">
              QAMAR <span className="text-brand-gold">CONSTRUCTION</span>
            </p>
            <p className="text-brand-muted text-xs font-lato mt-1 uppercase tracking-widest">
              Houston&apos;s Medical &amp; Dental Facility Builder
            </p>
          </div>
          {/* Gold divider */}
          <div className="w-24 h-px" style={{
            background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
          }} />
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-xs text-brand-gold mb-5">About Us</h3>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Houston&apos;s trusted builder for medical clinics, dental offices, and urgent care centers.
              Turnkey design-build — done right, on time, every time.
            </p>
            <p className="text-brand-muted text-xs font-lato mt-4 uppercase tracking-widest">
              Serving Houston &amp; Surrounding Areas
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-xs text-brand-gold mb-5">Services &amp; Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'All Services',        href: '/services'        },
                { label: 'Medical Clinics',     href: '/medical-clinics' },
                { label: 'Dental Clinics',      href: '/dental-clinics'  },
                { label: 'Urgent Care',         href: '/urgent-care'     },
                { label: 'Service Locations',   href: '/locations'       },
                { label: 'About Us',            href: '/about'           },
                { label: 'Request a Quote',     href: '/contact'         },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-brand-muted hover:text-brand-gold transition-colors text-sm font-lato flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-gold-dim flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-oswald uppercase tracking-widest text-xs text-brand-gold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+18327669246" className="flex items-start gap-3 text-brand-muted hover:text-brand-gold transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-gold flex-shrink-0" />
                  <span className="text-sm font-lato">(832) 766-9246</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/18327669246" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-brand-muted hover:text-brand-gold transition-colors">
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
      <div className="border-t border-brand-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms-of-service' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-brand-muted/60 hover:text-brand-gold text-xs font-lato transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-brand-muted/60 text-xs font-lato">
              &copy; {new Date().getFullYear()} Qamar Construction. All rights reserved. Houston, TX — Licensed &amp; Insured.
            </p>
            {/* 53Printers credit */}
            <a
              href="https://53printers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-brand-muted/50 hover:text-brand-gold transition-colors text-xs font-lato group"
            >
              <span>Designed &amp; Built by</span>
              <span className="font-oswald font-semibold tracking-wide group-hover:text-brand-gold transition-colors" style={{ color: '#c9a84c99' }}>
                53PRINTERS
              </span>
              <span className="text-brand-muted/30">· Engineering the AI Age</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
