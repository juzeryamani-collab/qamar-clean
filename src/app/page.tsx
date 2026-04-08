import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Stethoscope, Heart, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import LocationsGrid from '@/components/sections/LocationsGrid'
import CtaBanner from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Qamar Construction | Medical & Dental Facility Builder — Houston, TX',
  description: 'Qamar Construction delivers turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston and surrounding Texas communities.',
}

const services = [
  { icon: Stethoscope, title: 'Medical Clinics',       href: '/medical-clinics', tag: 'Most Requested', description: 'Full-service design and construction for primary care, specialty clinics, and multi-physician practices. From concept to certificate of occupancy.' },
  { icon: Building2,   title: 'Dental Clinics',        href: '/dental-clinics',  tag: '',              description: 'Specialized dental office construction with expert understanding of operatory layout, plumbing, cabinetry, and equipment integration.' },
  { icon: Heart,       title: 'Urgent Care Centers',   href: '/urgent-care',     tag: '',              description: 'Fast-track construction for urgent care facilities built to meet all medical codes, ADA standards, and minimize your time-to-open.' },
]

const stats = [
  { stat: '40+',   label: 'Projects Completed',   description: 'Proven track record of on-time, on-budget medical facility deliveries across Houston.' },
  { stat: '40mi',  label: 'Service Radius',        description: 'We serve the entire Greater Houston metro and surrounding communities.' },
  { stat: '1',     label: 'Team. One Contract.',   description: 'Design, permitting, and construction under a single roof — zero hand-off friction.' },
  { stat: '100%',  label: 'Code Compliant',        description: 'ADA, HIPAA-ready layouts, NFPA, and all local Houston building codes handled.' },
]

const processPreview = [
  { number: '01', title: 'Consultation', description: 'We learn your goals, space requirements, and budget.' },
  { number: '02', title: 'Design',       description: 'Plans optimized for patient flow and compliance.'    },
  { number: '03', title: 'Build',        description: 'Professional construction with regular updates.'     },
  { number: '04', title: 'Handoff',      description: 'Turnkey delivery — ready to open from day one.'     },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-brand-bg overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-brand-gold via-brand-gold to-transparent" />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-gold opacity-[0.03] blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <p className="section-tag">Houston&apos;s Premier Healthcare Builder</p>
            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-text leading-[1.05] mt-2">
              Building Houston&apos;s<br />Future of{' '}
              <span className="text-brand-gold">Healthcare</span>
            </h1>
            <p className="text-brand-muted text-lg sm:text-xl mt-6 max-w-2xl font-lato leading-relaxed">
              Turnkey design-build for medical clinics, dental offices, and urgent care centers. One team. One contract. On time.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
              <Link href="#services" className="btn-outline">Our Services</Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-12">
              {['Medical Clinics','Dental Offices','Urgent Care Centers'].map((s) => (
                <div key={s} className="flex items-center gap-2 text-brand-muted text-sm font-lato">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted/40">
          <span className="text-xs font-oswald uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-brand-muted/40 to-transparent" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-tag">Our Specializations</span>
            <h2 className="section-heading">What We Build</h2>
            <p className="text-brand-muted mt-4 max-w-xl font-lato">We specialize exclusively in healthcare facility construction — the complexity, compliance requirements, and workflow demands that general contractors aren&apos;t equipped to handle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <Link key={s.href} href={s.href} className="group relative bg-brand-bg border border-brand-border p-8 hover:border-brand-gold transition-all duration-300 flex flex-col">
                  {s.tag && <span className="absolute top-4 right-4 bg-brand-gold text-brand-bg text-[10px] font-oswald uppercase tracking-widest px-2 py-0.5">{s.tag}</span>}
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-surface border border-brand-border mb-6 group-hover:border-brand-gold transition-colors">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="font-oswald text-xl font-semibold text-brand-text mb-3">{s.title}</h3>
                  <p className="text-brand-muted text-sm font-lato leading-relaxed flex-1">{s.description}</p>
                  <div className="flex items-center gap-2 mt-6 text-brand-gold text-xs font-oswald uppercase tracking-widest group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Qamar */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Why Qamar Construction</span>
              <h2 className="section-heading mb-6">Healthcare Construction<br />Is All We Do</h2>
              <p className="text-brand-muted font-lato leading-relaxed">Medical and dental facilities demand a builder who understands infection control requirements, specialized plumbing and electrical for medical equipment, ADA compliance, and fast-track permitting. That&apos;s our sole focus — and Houston trusts us to deliver.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+18327669246" className="btn-primary text-xs py-3 px-6"><Phone className="w-4 h-4" />Call Us Now</a>
                <a href="https://wa.me/18327669246" target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-3 px-6"><MessageCircle className="w-4 h-4" />WhatsApp</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="bg-brand-surface border border-brand-border p-6">
                  <div className="font-oswald text-3xl font-bold text-brand-gold mb-1">{item.stat}</div>
                  <div className="font-oswald text-sm font-semibold text-brand-text mb-2">{item.label}</div>
                  <p className="text-brand-muted text-xs font-lato leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process preview */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="section-tag mx-auto">Simple Process</span>
            <h2 className="section-heading">From Vision to Turnkey</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {processPreview.map((step) => (
              <div key={step.number} className="bg-brand-bg border border-brand-border p-6 text-center">
                <div className="font-oswald text-4xl font-bold text-brand-gold/20 mb-3">{step.number}</div>
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
