import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Qamar Construction — how we collect, use, and protect your information.',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative py-16 border-b border-brand-border overflow-hidden" style={{ background: '#111115' }}>
        <div className="absolute left-0 top-0 w-1 h-full bg-brand-gold" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="section-tag">Legal</span>
          <h1 className="section-heading mt-2">Privacy Policy</h1>
          <p className="text-brand-muted mt-3 font-lato text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#1a1a1e' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm max-w-none">
          <div className="space-y-8 text-brand-muted font-lato leading-relaxed">

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">1. Information We Collect</h2>
              <p>When you submit a quote request or contact form on this website, we collect the information you provide, including your name, company name, phone number, email address, and project details. We may also collect standard web analytics data such as browser type, pages visited, and general geographic location via cookies and analytics tools.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">2. How We Use Your Information</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your project inquiry or quote request</li>
                <li>Contact you about your construction project</li>
                <li>Send a confirmation of your inquiry</li>
                <li>Improve our website and services</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">3. Cookies</h2>
              <p>Our website may use cookies and similar tracking technologies to improve your experience and analyze site traffic. You can control cookie settings through your browser. See our <Link href="/cookie-policy" className="text-brand-gold hover:text-brand-gold-hover">Cookie Policy</Link> for more details.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">4. Email Communications</h2>
              <p>When you submit a contact form, you will receive an automated confirmation email. You may also receive follow-up communications from our team regarding your project inquiry. You may opt out of further communications at any time by replying to any email.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">5. Data Security</h2>
              <p>We take reasonable steps to protect your personal information. Form submissions are processed via Resend, a secure email delivery service. We do not store payment information on our servers.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">6. Third-Party Services</h2>
              <p>Our website uses the following third-party services: Vercel (hosting), Resend (email delivery), and Google Fonts (typography). Each service has its own privacy policy governing the data they may collect.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">7. Your Rights</h2>
              <p>You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make such a request, contact us at <a href="mailto:contact@qamarconstruction.com" className="text-brand-gold hover:text-brand-gold-hover">contact@qamarconstruction.com</a>.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated date.</p>
            </div>

            <div>
              <h2 className="font-oswald text-xl text-brand-text mb-3">9. Contact</h2>
              <p>For any privacy-related questions, contact us at:</p>
              <div className="mt-2">
                <p>Qamar Construction</p>
                <p>Houston, TX</p>
                <p><a href="tel:+18327669246" className="text-brand-gold hover:text-brand-gold-hover">(832) 766-9246</a></p>
                <p><a href="mailto:contact@qamarconstruction.com" className="text-brand-gold hover:text-brand-gold-hover">contact@qamarconstruction.com</a></p>
              </div>
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
