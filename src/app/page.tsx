import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, MessageCircle, CheckCircle, Shield, Clock, Wrench, Award } from 'lucide-react'
import LocationsGrid from '@/components/sections/LocationsGrid'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Qamar Construction | Medical & Dental Facility Builder — Houston, TX',
  description: 'Qamar Construction delivers turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston and surrounding Texas communities.',
}

const services = [
  {
    title: 'Medical Clinics',
    href: '/medical-clinics',
    tag: 'Most Requested',
    description: 'Full-service design and construction for primary care, specialty clinics, and multi-physician practices. From concept to certificate of occupancy.',
    accent: 'from-teal-950 via-[#0a1f1f] to-brand-bg',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-700',
    // SVG path for stethoscope-like medical symbol
    graphic: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-30" fill="none" stroke="currentColor">
        <circle cx="60" cy="60" r="28" strokeWidth="2.5" className="text-teal-400"/>
        <path d="M60 32 V20 M60 88 V100 M32 60 H20 M88 60 H100" strokeWidth="2" className="text-teal-500" strokeLinecap="round"/>
        <path d="M45 60 Q45 45 60 45 Q75 45 75 60 Q75 72 65 76 L65 88 Q65 95 58 95 Q51 95 51 88 L51 76 Q41 72 41 60 Z" strokeWidth="2" className="text-teal-400"/>
        <circle cx="58" cy="90" r="4" fill="currentColor" className="text-teal-500" strokeWidth="0"/>
      </svg>
    ),
  },
  {
    title: 'Dental Clinics',
    href: '/dental-clinics',
    tag: '',
    description: 'Specialized dental office construction with expert understanding of operatory layout, plumbing, cabinetry, and equipment integration.',
    accent: 'from-blue-950 via-[#0a0f1f] to-brand-bg',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-700',
    graphic: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-30" fill="none" stroke="currentColor">
        <path d="M30 30 Q30 20 45 20 Q52 20 60 28 Q68 20 75 20 Q90 20 90 30 Q95 50 85 70 Q78 85 72 100 Q68 110 64 100 Q60 90 60 80 Q60 90 56 100 Q52 110 48 100 Q42 85 35 70 Q25 50 30 30Z" strokeWidth="2.5" className="text-blue-400"/>
        <path d="M45 38 Q52 32 60 36 Q68 32 75 38" strokeWidth="2" strokeLinecap="round" className="text-blue-500"/>
      </svg>
    ),
  },
  {
    title: 'Urgent Care Centers',
    href: '/urgent-care',
    tag: '',
    description: 'Fast-track construction for urgent care facilities built to meet all medical codes, ADA standards, and minimize your time-to-open.',
    accent: 'from-red-950 via-[#1f0a0a] to-brand-bg',
    iconColor: 'text-red-400',
    borderHover: 'hover:border-red-800',
    graphic: (
      <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-30" fill="none" stroke="currentColor">
        <rect x="20" y="20" width="80" height="80" rx="8" strokeWidth="2.5" className="text-red-400"/>
        <path d="M60 38 V82 M38 60 H82" strokeWidth="8" strokeLinecap="round" className="text-red-400"/>
      </svg>
    ),
  },
]

const stats = [
  { stat: '40+',  label: 'Projects Delivered',   description: 'On-time, on-budget medical facility builds across the Greater Houston area.' },
  { stat: '40mi', label: 'Service Radius',        description: 'Covering the full Greater Houston metro — Harris, Fort Bend, Galveston & more.' },
  { stat: '1',    label: 'Team. One Contract.',   description: 'Design, permitting, and build under a single roof. Zero hand-off friction.' },
  { stat: '100%', label: 'Code Compliant',        description: 'ADA, HIPAA-ready layouts, NFPA 101, and local Houston building codes handled.' },
]

const whyItems = [
  { icon: Shield,  title: 'Medical-Grade Standards',  body: 'Every build meets Texas DSHS, NFPA 101, and ADA requirements — handled in-house, not delegated.' },
  { icon: Wrench,  title: 'True Turnkey Delivery',    body: 'Architecture, permits, build, and punch list — one team, one contract, one point of contact.' },
  { icon: Clock,   title: 'Fast-Track Experience',    body: 'We know how to move medical projects through Houston permitting faster than any general contractor.' },
  { icon: Award,   title: 'Healthcare-Only Focus',    body: 'We don\'t build warehouses or retail. Medical and dental facilities are all we do — and it shows.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
        {/* Hero photo layer */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Dark metallic overlay — keeps text readable and on-brand */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(112deg, rgba(10,10,13,0.97) 0%, rgba(18,18,22,0.93) 40%, rgba(26,26,30,0.88) 60%, rgba(18,18,22,0.95) 100%)',
        }} />
        {/* Brushed steel texture over everything */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 3px)',
        }} />
        {/* Gold left accent stripe */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        {/* Faint gold glow top-right */}
        <div className="absolute -top-32 right-0 w-[50vw] h-[50vw] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />

        {/* Building silhouette SVG — decorative, bottom-right */}
        <div className="absolute bottom-0 right-0 w-full sm:w-2/3 lg:w-1/2 h-full opacity-[0.035] pointer-events-none select-none flex items-end justify-end">
          <svg viewBox="0 0 600 400" className="w-full h-auto" fill="none" stroke="#c9a84c" strokeWidth="1.5">
            {/* Main building */}
            <rect x="180" y="80" width="240" height="320" />
            {/* Windows grid */}
            {[0,1,2,3,4,5].map(row =>
              [0,1,2,3].map(col => (
                <rect key={`${row}-${col}`} x={200 + col*54} y={100 + row*44} width="28" height="28" strokeWidth="1" />
              ))
            )}
            {/* Medical cross on building top */}
            <path d="M285 50 h30 v-22 h-30 v-22 h-30 v22 h-30 v22 h30 v22 h30 z" strokeWidth="1.5" />
            {/* Side structures */}
            <rect x="80" y="180" width="100" height="220" />
            <rect x="420" y="200" width="120" height="200" />
            {/* Ground line */}
            <line x1="20" y1="400" x2="580" y2="400" />
            {/* Construction crane */}
            <line x1="520" y1="400" x2="520" y2="80" strokeWidth="2" />
            <line x1="520" y1="80" x2="420" y2="80" strokeWidth="2" />
            <line x1="520" y1="80" x2="540" y2="130" strokeWidth="1.5" />
            <line x1="470" y1="80" x2="470" y2="120" strokeWidth="1" />
            <line x1="450" y1="80" x2="450" y2="130" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <p className="section-tag">Houston&apos;s Premier Healthcare Builder</p>
            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mt-2">
              <span className="text-brand-text">Building Houston&apos;s</span><br />
              <span className="text-brand-text">Future of </span>
              <span className="text-brand-gold" style={{
                textShadow: '0 0 40px rgba(201,168,76,0.4), 0 0 80px rgba(201,168,76,0.15)'
              }}>Healthcare</span>
            </h1>
            <p className="text-brand-muted text-lg sm:text-xl mt-6 max-w-2xl font-lato leading-relaxed">
              Turnkey design-build for medical clinics, dental offices, and urgent care centers.<br className="hidden sm:block" />
              One team. One contract. On time.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact" className="btn-primary shadow-lg" style={{ boxShadow: '0 4px 24px rgba(201,168,76,0.3)' }}>
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="#services" className="btn-outline">Our Services</Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12 pt-8 border-t border-brand-border/50">
              {['Medical Clinics','Dental Offices','Urgent Care Centers'].map((s) => (
                <div key={s} className="flex items-center gap-2 text-brand-muted text-sm font-lato">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted/30 hidden sm:flex">
          <span className="text-[10px] font-oswald uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand-muted/30 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24" style={{
        background: 'linear-gradient(180deg, #111115 0%, #1a1a1e 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 3px), linear-gradient(180deg, #111115 0%, #1a1a1e 100%)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-tag">Our Specializations</span>
            <h2 className="section-heading">What We Build</h2>
            <p className="text-brand-muted mt-4 max-w-xl font-lato">
              We specialize exclusively in healthcare facility construction — the compliance requirements,
              infection control, and workflow demands that general contractors aren&apos;t equipped to handle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href}
                className={`group relative flex flex-col border border-brand-border ${s.borderHover} hover:shadow-xl transition-all duration-300 overflow-hidden`}
                style={{ background: '#1c1c20' }}>
                {/* Graphic header */}
                <div className={`relative h-44 bg-gradient-to-br ${s.accent} flex items-center justify-center overflow-hidden`}>
                  {/* Grid lines architectural feel */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }} />
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-5 h-5 border-l border-t border-brand-gold/40" />
                  <div className="absolute bottom-3 right-3 w-5 h-5 border-r border-b border-brand-gold/40" />
                  {/* Icon graphic */}
                  <div className={s.iconColor}>{s.graphic}</div>
                </div>
                {/* Gold top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {s.tag && (
                  <span className="absolute top-3 right-3 bg-brand-gold text-brand-bg text-[10px] font-oswald uppercase tracking-widest px-2 py-0.5 z-10">
                    {s.tag}
                  </span>
                )}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-oswald text-xl font-semibold text-brand-text mb-3">{s.title}</h3>
                  <p className="text-brand-muted text-sm font-lato leading-relaxed flex-1">{s.description}</p>
                  <div className="flex items-center gap-2 mt-6 text-brand-gold text-xs font-oswald uppercase tracking-widest group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY QAMAR ── */}
      <section className="py-24 relative overflow-hidden" style={{
        background: '#16161a',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 3px), linear-gradient(135deg, #111114 0%, #1a1a1e 50%, #111114 100%)',
      }}>
        {/* Faint background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-oswald font-bold text-[18vw] text-white/[0.018] leading-none tracking-tight whitespace-nowrap">QAMAR</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Why Qamar Construction</span>
              <h2 className="section-heading mb-6">Healthcare Construction<br />Is All We Do</h2>
              <p className="text-brand-muted font-lato leading-relaxed">
                Medical and dental facilities demand a builder who understands infection control,
                specialized MEP for medical equipment, ADA compliance, and fast-track Houston permitting.
                That&apos;s our sole focus — and it shows in every project we deliver.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+18327669246" className="btn-primary text-xs py-3 px-6">
                  <Phone className="w-4 h-4" />Call Us Now
                </a>
                <a href="https://wa.me/18327669246" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-3 px-6">
                  <MessageCircle className="w-4 h-4" />WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItems.map(({ icon: Icon, title, body }) => (
                <div key={title} className="group p-6 border border-brand-border hover:border-brand-gold transition-colors duration-200"
                  style={{ background: 'linear-gradient(135deg, #1e1e22 0%, #232328 100%)' }}>
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-border group-hover:border-brand-gold transition-colors mb-4"
                    style={{ background: '#161618' }}>
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h4 className="font-oswald text-base font-semibold text-brand-text mb-2">{title}</h4>
                  <p className="text-brand-muted text-xs font-lato leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="py-16 border-y border-brand-border" style={{
        background: 'linear-gradient(90deg, #111114 0%, #1c1c20 50%, #111114 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 3px), linear-gradient(90deg, #111114 0%, #1c1c20 50%, #111114 100%)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-oswald text-4xl sm:text-5xl font-bold text-brand-gold mb-1"
                  style={{ textShadow: '0 0 30px rgba(201,168,76,0.25)' }}>
                  {item.stat}
                </div>
                <div className="font-oswald text-xs font-semibold text-brand-text uppercase tracking-widest mb-2">{item.label}</div>
                <p className="text-brand-muted text-xs font-lato leading-relaxed hidden sm:block">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS PREVIEW ── */}
      <section className="py-24" style={{
        background: '#1a1a1e',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 3px)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-tag mx-auto">Simple Process</span>
            <h2 className="section-heading">From Vision to Turnkey</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: '01', title: 'Consultation', description: 'We learn your goals, space requirements, and budget.' },
              { number: '02', title: 'Design',       description: 'Plans optimized for patient flow and compliance.'    },
              { number: '03', title: 'Build',        description: 'Professional construction with regular updates.'     },
              { number: '04', title: 'Handoff',      description: 'Turnkey delivery — ready to open from day one.'     },
            ].map((step, i, arr) => (
              <div key={step.number} className="relative group border border-brand-border hover:border-brand-gold transition-colors duration-200 p-6 text-center"
                style={{ background: 'linear-gradient(135deg, #1c1c20 0%, #222227 100%)' }}>
                {/* Connector */}
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-px w-4 h-px bg-brand-gold/30 z-10 -translate-y-1/2" />
                )}
                <div className="font-oswald text-5xl font-bold mb-3 leading-none"
                  style={{ color: 'rgba(201,168,76,0.15)' }}>
                  {step.number}
                </div>
                <h4 className="font-oswald text-base font-semibold text-brand-text mb-2">{step.title}</h4>
                <p className="text-brand-muted text-xs font-lato leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationsGrid />
      <CtaBanner />
    </>
  )
}
