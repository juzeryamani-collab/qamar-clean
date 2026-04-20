'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/cn'

const services = [
  { label: 'Medical Clinics', href: '/medical-clinics' },
  { label: 'Dental Clinics',  href: '/dental-clinics'  },
  { label: 'Urgent Care',     href: '/urgent-care'     },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [svcOpen, setSvcOpen]   = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-md opacity-30 scale-125"
                style={{ background: 'radial-gradient(circle, #c9a84c, transparent)' }} />
              <Image src="/logo.png" alt="Qamar Construction" width={56} height={56} className="object-contain relative z-10" priority />
            </div>
            <div className="hidden sm:block">
              <p className="font-oswald font-bold text-xl tracking-wide leading-none">
                QAMAR <span className="text-brand-gold">CONSTRUCTION</span>
              </p>
              <p className="text-brand-muted text-[10px] font-lato uppercase tracking-widest mt-0.5">Houston, TX</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors py-2">
                Services
                <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-52 bg-brand-surface border border-brand-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                {services.map((s) => (
                  <Link key={s.href} href={s.href}
                    className="block px-4 py-3 text-sm text-brand-muted hover:text-brand-gold hover:bg-brand-surface-2 transition-colors font-lato border-b border-brand-border last:border-0">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/services"  className="font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors">Services</Link>
            <Link href="/locations" className="font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors">Locations</Link>
            <Link href="/about"     className="font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors">About</Link>
            <Link href="/contact"   className="font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18327669246" className="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors text-sm font-lato">
              <Phone className="w-4 h-4" /> (832) 766-9246
            </a>
            <Link href="/contact" className="btn-primary text-xs py-3 px-6">Get a Quote</Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-brand-text hover:text-brand-gold transition-colors" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden bg-brand-surface border-t border-brand-border overflow-hidden transition-all duration-300', open ? 'max-h-screen' : 'max-h-0')}>
        <div className="px-4 py-4 space-y-1">
          <button onClick={() => setSvcOpen(!svcOpen)}
            className="flex items-center justify-between w-full py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">
            Services
            <svg className={cn('w-3 h-3 transition-transform', svcOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {svcOpen && (
            <div className="pl-4 pb-2 space-y-1">
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-brand-muted hover:text-brand-gold transition-colors font-lato">
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          <Link href="/services"  onClick={() => setOpen(false)} className="block py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">Services</Link>
          <Link href="/locations" onClick={() => setOpen(false)} className="block py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">Locations</Link>
          <Link href="/about"     onClick={() => setOpen(false)} className="block py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">About</Link>
          <Link href="/contact"   onClick={() => setOpen(false)} className="block py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">Contact</Link>
          <div className="pt-4 pb-2 flex flex-col gap-3">
            <a href="tel:+18327669246" className="flex items-center gap-2 text-brand-muted text-sm font-lato">
              <Phone className="w-4 h-4 text-brand-gold" /> (832) 766-9246
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center text-xs">Get a Quote</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
