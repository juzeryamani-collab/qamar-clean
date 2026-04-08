'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/cn'

const navLinks = [
  {
    label: 'Services',
    children: [
      { label: 'Medical Clinics',  href: '/medical-clinics' },
      { label: 'Dental Clinics',   href: '/dental-clinics'  },
      { label: 'Urgent Care',      href: '/urgent-care'     },
    ],
  },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact',   href: '/contact'   },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-bg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Qamar Construction"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
            <span className="font-oswald font-bold text-xl tracking-wide text-brand-text hidden sm:block">
              QAMAR <span className="text-brand-gold">CONSTRUCTION</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors py-2"
                  >
                    {link.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-1 w-52 bg-brand-surface border border-brand-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-brand-muted hover:text-brand-gold hover:bg-brand-surface-2 transition-colors font-lato border-b border-brand-border last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18327669246"
              className="flex items-center gap-2 text-brand-muted hover:text-brand-gold transition-colors text-sm font-lato"
            >
              <Phone className="w-4 h-4" />
              (832) 766-9246
            </a>
            <Link href="/contact" className="btn-primary text-xs py-3 px-6">
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-brand-text hover:text-brand-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden bg-brand-surface border-t border-brand-border overflow-hidden transition-all duration-300',
        mobileOpen ? 'max-h-screen' : 'max-h-0'
      )}>
        <div className="px-4 py-4 space-y-1">
          {/* Services toggle */}
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center justify-between w-full py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border"
          >
            Services
            <svg className={cn('w-3 h-3 transition-transform', servicesOpen && 'rotate-180')} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-1 pb-2">
              {navLinks[0].children!.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm text-brand-muted hover:text-brand-gold transition-colors font-lato"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/locations" onClick={() => setMobileOpen(false)}
            className="block py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">
            Locations
          </Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}
            className="block py-3 font-oswald uppercase tracking-widest text-xs text-brand-muted hover:text-brand-gold transition-colors border-b border-brand-border">
            Contact
          </Link>

          <div className="pt-4 pb-2 flex flex-col gap-3">
            <a href="tel:+18327669246" className="flex items-center gap-2 text-brand-muted text-sm font-lato">
              <Phone className="w-4 h-4 text-brand-gold" />
              (832) 766-9246
            </a>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary justify-center text-xs">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
