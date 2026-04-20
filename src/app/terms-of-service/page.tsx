import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Qamar Construction.',
  robots: { index: false, follow: false },
}

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative py-16 border-b border-brand-border overflow-hidden" style={{ background: '#111115' }}>
        <div className="absolute left-0 top-0 w-1 h-full bg-brand-gold" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Legal</span>
          <h1 className="section-heading mt-2">Terms of Service</h1>
          <p className="text-brand-muted mt-3 font-lato text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#1a1a1e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-brand-muted font-lato leading-relaxed">

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the Qamar Construction website (medicaldentaldesignbuild.com and qamarconstruction.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">2. Website Use</h2>
              <p>This website is provided for informational purposes and to facilitate contact with Qamar Construction. You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of others.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">3. No Construction Contract</h2>
              <p>Submitting a contact or quote request form on this website does not constitute a binding construction contract. All construction services are subject to a separate, signed written agreement between Qamar Construction and the client. No work will begin without an executed contract.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">4. Accuracy of Information</h2>
              <p>While we strive to keep information on this website accurate and up to date, Qamar Construction makes no warranties regarding the completeness or accuracy of any content. Project timelines, pricing, and service scope described on this website are illustrative and subject to change.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">5. Intellectual Property</h2>
              <p>All content on this website — including text, graphics, logos, and design — is the property of Qamar Construction or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">6. Limitation of Liability</h2>
              <p>Qamar Construction shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on information contained herein.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">7. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Harris County, Texas.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">8. Changes to Terms</h2>
              <p>We reserve the right to update these Terms at any time. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">9. Contact</h2>
              <p>For questions about these Terms, contact us at <a href="mailto:contact@qamarconstruction.com" className="text-brand-gold hover:text-brand-gold-hover">contact@qamarconstruction.com</a> or <a href="tel:+18327669246" className="text-brand-gold hover:text-brand-gold-hover">(832) 766-9246</a>.</p>
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
