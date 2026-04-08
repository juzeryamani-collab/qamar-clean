import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Qamar Construction.',
  robots: { index: false, follow: false },
}

export default function CookiePolicyPage() {
  return (
    <>
      <section className="relative py-16 border-b border-brand-border overflow-hidden" style={{ background: '#111115' }}>
        <div className="absolute left-0 top-0 w-1 h-full bg-brand-gold" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Legal</span>
          <h1 className="section-heading mt-2">Cookie Policy</h1>
          <p className="text-brand-muted mt-3 font-lato text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#1a1a1e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-brand-muted font-lato leading-relaxed">

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">What Are Cookies?</h2>
              <p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, analyze traffic, and improve performance.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">How We Use Cookies</h2>
              <p>The Qamar Construction website may use the following types of cookies:</p>
              <div className="mt-4 space-y-4">
                {[
                  { type: 'Essential Cookies', desc: 'Required for the website to function properly. These cannot be disabled as they are necessary for core features like form submissions and page navigation.' },
                  { type: 'Analytics Cookies', desc: 'Help us understand how visitors use our site (e.g., which pages are most visited, how long visitors stay). This data is aggregated and anonymous. We may use tools like Vercel Analytics for this purpose.' },
                  { type: 'Font & CDN Cookies', desc: 'Google Fonts may set cookies when loading typography resources used on this site.' },
                ].map(({ type, desc }) => (
                  <div key={type} className="p-4 border-l-2 border-brand-gold/40" style={{ background: 'rgba(201,168,76,0.04)' }}>
                    <h4 className="font-oswald text-sm text-brand-text mb-1">{type}</h4>
                    <p className="text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">Managing Cookies</h2>
              <p>You can control and delete cookies through your browser settings. Note that disabling certain cookies may affect website functionality. Common browser settings:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Safari: Preferences → Privacy</li>
                <li>Firefox: Options → Privacy &amp; Security</li>
                <li>Edge: Settings → Privacy, Search, and Services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">Third-Party Cookies</h2>
              <p>We do not use third-party advertising cookies. Third-party services we use (Vercel, Google Fonts) may set their own cookies subject to their respective privacy policies.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">Contact</h2>
              <p>Questions about our cookie use? Contact us at <a href="mailto:contact@qamarconstruction.com" className="text-brand-gold hover:text-brand-gold-hover">contact@qamarconstruction.com</a>.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-border">
            <Link href="/" className="text-brand-gold hover:text-brand-gold-hover text-sm font-oswald uppercase tracking-widest transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
