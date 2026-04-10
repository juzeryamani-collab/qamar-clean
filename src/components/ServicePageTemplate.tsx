import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import ProcessSteps from '@/components/sections/ProcessSteps'
import LocationsGrid from '@/components/sections/LocationsGrid'
import CtaBanner from '@/components/sections/CtaBanner'
import Testimonials from '@/components/sections/Testimonials'
import FaqAccordion, { type Faq } from '@/components/sections/FaqAccordion'

interface Scope   { icon: LucideIcon; title: string; description: string }
interface Feature { title: string; description: string }
interface Step    { number: string; title: string; description: string }
interface Testimonial { quote: string; name: string; title: string; practice: string; initials: string }

interface Props {
  tag: string
  heroTitle: string
  heroSub: string
  heroImage?: string
  scopeHeading: string
  scopeItems: Scope[]
  features: Feature[]
  steps?: Step[]
  compliance?: string
  testimonials?: Testimonial[]
  testimonialsHeading?: string
  faqs?: Faq[]
}

export default function ServicePageTemplate({
  tag, heroTitle, heroSub, heroImage, scopeHeading, scopeItems, features, steps, compliance, testimonials, testimonialsHeading, faqs
}: Props) {
  return (
    <>
      {/* Hero with photo */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImage}')` }} />
        )}
        {/* Metallic dark overlay */}
        <div className="absolute inset-0" style={{
          background: heroImage
            ? 'linear-gradient(112deg, rgba(8,8,11,0.97) 0%, rgba(18,18,22,0.92) 45%, rgba(26,26,30,0.88) 100%)'
            : 'linear-gradient(112deg, #0a0a0d 0%, #141418 40%, #1a1a1e 100%)',
        }} />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 3px)',
        }} />
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="absolute -top-32 right-0 w-[40vw] h-[40vw] rounded-full opacity-[0.05] blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #c9a84c 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="section-tag">{tag}</span>
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-tight max-w-3xl mt-2">
            {heroTitle.split('|').map((part, i) =>
              i % 2 === 0
                ? <span key={i}>{part}</span>
                : <span key={i} className="text-brand-gold" style={{ textShadow: '0 0 40px rgba(201,168,76,0.35)' }}>{part}</span>
            )}
          </h1>
          <p className="text-brand-muted mt-5 text-lg max-w-2xl font-lato leading-relaxed">{heroSub}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn-primary" style={{ boxShadow: '0 4px 20px rgba(201,168,76,0.25)' }}>
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+18327669246" className="btn-outline">Call (832) 766-9246</a>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-24" style={{
        background: '#111115',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.009) 2px, rgba(255,255,255,0.009) 3px), linear-gradient(135deg, #0e0e12 0%, #161619 50%, #0e0e12 100%)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="section-tag">What We Build</span>
            <h2 className="section-heading">{scopeHeading}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scopeItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group border border-brand-border hover:border-brand-gold transition-colors duration-200 p-6"
                  style={{ background: 'linear-gradient(135deg, #1a1a1e 0%, #1f1f24 100%)' }}>
                  <div className="w-10 h-10 flex items-center justify-center border border-brand-border group-hover:border-brand-gold transition-colors mb-4"
                    style={{ background: '#141416' }}>
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
      <section className="py-24" style={{
        background: '#111115',
        backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.009) 2px, rgba(255,255,255,0.009) 3px)',
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-tag">Why Choose Qamar</span>
              <h2 className="section-heading mb-6">Built for Healthcare.<br />Delivered on Time.</h2>
              <p className="text-brand-muted font-lato leading-relaxed">
                Medical facility construction requires deep knowledge of infection control, equipment clearances,
                patient flow, and regulatory compliance. Qamar brings all of that expertise under one roof.
              </p>
              {compliance && (
                <div className="mt-6 p-5 border-l-2 border-brand-gold"
                  style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.06) 0%, transparent 100%)' }}>
                  <p className="text-brand-muted text-sm font-lato leading-relaxed">{compliance}</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="group border border-brand-border hover:border-brand-gold transition-colors duration-200 p-5"
                  style={{ background: 'linear-gradient(135deg, #1a1a1e 0%, #1f1f24 100%)' }}>
                  <div className="w-8 h-0.5 mb-3" style={{
                    background: 'linear-gradient(90deg, #c9a84c, transparent)',
                  }} />
                  <h4 className="font-oswald text-base font-semibold text-brand-text mb-1">{f.title}</h4>
                  <p className="text-brand-muted text-xs font-lato leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {testimonials && testimonials.length > 0 && (
        <Testimonials testimonials={testimonials} heading={testimonialsHeading} />
      )}

      {faqs && faqs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faqs.map(f => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: tag,
                provider: {
                  '@type': 'LocalBusiness',
                  name: 'Qamar Construction',
                  telephone: '+18327669246',
                  url: 'https://qamar.53printers.com',
                },
                areaServed: { '@type': 'State', name: 'Texas' },
                description: heroSub,
              }),
            }}
          />
          <section
            className="py-24 border-y border-brand-border"
            style={{
              background: 'linear-gradient(180deg, #0e0e12 0%, #131317 100%)',
              backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 3px), linear-gradient(180deg, #0e0e12 0%, #131317 100%)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="section-tag">FAQ</span>
                  <h2 className="section-heading mb-4">Common Questions</h2>
                  <p className="text-brand-muted text-sm font-lato leading-relaxed">
                    Still have questions? Call us directly at{' '}
                    <a href="tel:+18327669246" className="text-brand-gold hover:text-brand-gold-hover transition-colors">
                      (832) 766-9246
                    </a>{' '}
                    or{' '}
                    <a href="https://wa.me/18327669246" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-hover transition-colors">
                      WhatsApp us
                    </a>
                    .
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <FaqAccordion faqs={faqs} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <LocationsGrid />
      <CtaBanner />
    </>
  )
}
