import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import ProcessSteps from '@/components/sections/ProcessSteps'
import LocationsGrid from '@/components/sections/LocationsGrid'
import CtaBanner from '@/components/sections/CtaBanner'

interface Scope   { icon: LucideIcon; title: string; description: string }
interface Feature { title: string; description: string }
interface Step    { number: string; title: string; description: string }

interface Props {
  tag: string
  heroTitle: string
  heroSub: string
  scopeHeading: string
  scopeItems: Scope[]
  features: Feature[]
  steps?: Step[]
  compliance?: string
}

export default function ServicePageTemplate({ tag, heroTitle, heroSub, scopeHeading, scopeItems, features, steps, compliance }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-brand-bg overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #c9a84c 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-brand-gold via-brand-gold to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="section-tag">{tag}</span>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-tight max-w-3xl mt-2">
            {heroTitle.split('|').map((part, i) =>
              i % 2 === 0 ? <span key={i}>{part}</span> : <span key={i} className="text-brand-gold">{part}</span>
            )}
          </h1>
          <p className="text-brand-muted mt-5 text-lg max-w-2xl font-lato leading-relaxed">{heroSub}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary">Request a Quote <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+18327669246" className="btn-outline">Call (832) 766-9246</a>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-tag">What We Build</span>
            <h2 className="section-heading">{scopeHeading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-brand-bg border border-brand-border p-6 hover:border-brand-gold transition-colors duration-200 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-brand-surface border border-brand-border mb-4 group-hover:border-brand-gold transition-colors">
                    <Icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-oswald text-lg font-semibold text-brand-text mb-2">{item.title}</h3>
                  <p className="text-brand-muted text-sm font-lato leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps steps={steps} />

      {/* Features */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Why Choose Qamar</span>
              <h2 className="section-heading mb-6">Built for Healthcare.<br />Delivered on Time.</h2>
              <p className="text-brand-muted font-lato leading-relaxed">
                Medical facility construction requires deep knowledge of infection control, equipment clearances, patient flow, and regulatory compliance. Qamar brings all of that expertise under one roof.
              </p>
              {compliance && (
                <div className="mt-6 p-4 border-l-2 border-brand-gold bg-brand-bg">
                  <p className="text-brand-muted text-sm font-lato">{compliance}</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="bg-brand-bg border border-brand-border p-5 hover:border-brand-gold transition-colors duration-200">
                  <div className="w-8 h-0.5 bg-brand-gold mb-3" />
                  <h4 className="font-oswald text-base font-semibold text-brand-text mb-1">{f.title}</h4>
                  <p className="text-brand-muted text-xs font-lato leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LocationsGrid />
      <CtaBanner />
    </>
  )
}
