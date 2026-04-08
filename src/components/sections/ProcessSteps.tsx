interface Step { number: string; title: string; description: string }

const defaultSteps: Step[] = [
  { number: '01', title: 'Consultation', description: "We meet to understand your vision, patient-flow needs, equipment requirements, budget, and timeline. No obligations — just clarity." },
  { number: '02', title: 'Design & Planning', description: 'Our team produces architectural plans and interior design optimized for medical workflows, code compliance, and your brand.' },
  { number: '03', title: 'Permitting', description: "We handle all city permits, ADA compliance documentation, and medical-specific inspections so you don't have to." },
  { number: '04', title: 'Construction', description: 'Professional build using medical-grade materials and standards. You receive regular progress updates throughout.' },
  { number: '05', title: 'Turnkey Handoff', description: 'Complete walkthrough, punch list resolution, and keys in hand. Your facility is ready to open from day one.' },
]

export default function ProcessSteps({ steps = defaultSteps }: { steps?: Step[] }) {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="section-tag mx-auto">How It Works</span>
          <h2 className="section-heading">Our Build Process</h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto font-lato">From first conversation to final walkthrough — one team, one contract, zero surprises.</p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-[2.25rem] top-6 bottom-6 w-px bg-brand-border" />
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 lg:gap-10 items-start">
                <div className="flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-full border-2 border-brand-gold bg-brand-surface flex items-center justify-center z-10">
                  <span className="font-oswald font-bold text-brand-gold text-lg">{step.number}</span>
                </div>
                <div className="flex-1 pb-4 border-b border-brand-border last:border-0">
                  <h3 className="font-oswald text-xl font-semibold text-brand-text mb-2">{step.title}</h3>
                  <p className="text-brand-muted font-lato text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
