interface Testimonial {
  quote: string
  name: string
  title: string
  practice: string
  initials: string
}

interface Props {
  testimonials: Testimonial[]
  heading?: string
}

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ testimonials, heading = 'What Our Clients Say' }: Props) {
  return (
    <section className="py-24 border-y border-brand-border" style={{
      background: 'linear-gradient(180deg, #0e0e12 0%, #131317 100%)',
      backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 3px), linear-gradient(180deg, #0e0e12 0%, #131317 100%)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="section-tag mx-auto">Client Reviews</span>
          <h2 className="section-heading">{heading}</h2>
          <p className="text-brand-muted mt-4 font-lato max-w-xl mx-auto">
            Trusted by physicians, dentists, and healthcare operators across the Greater Houston area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative flex flex-col border border-brand-border hover:border-brand-gold transition-colors duration-300 p-7 group"
              style={{ background: 'linear-gradient(135deg, #18181c 0%, #1e1e23 100%)' }}
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-5 right-6 font-oswald font-bold text-7xl leading-none select-none pointer-events-none"
                style={{ color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-brand-muted text-sm font-lato leading-relaxed relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="mt-6 mb-5 h-px" style={{
                background: 'linear-gradient(90deg, rgba(201,168,76,0.3), transparent)',
              }} />

              {/* Attribution */}
              <div className="flex items-center gap-3">
                {/* Initials avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-oswald font-bold text-sm text-brand-bg"
                  style={{ background: 'linear-gradient(135deg, #c9a84c, #8a7030)' }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-oswald text-sm font-semibold text-brand-text truncate">{t.name}</p>
                  <p className="text-brand-muted text-xs font-lato truncate">{t.title}</p>
                  <p className="text-brand-gold text-xs font-lato font-medium truncate">{t.practice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Qamar / Zain attribution note */}
        <p className="text-center mt-10 text-brand-muted/50 text-xs font-lato">
          Reviews reflect client experiences working directly with Zain and the Qamar Construction team.
        </p>
      </div>
    </section>
  )
}
