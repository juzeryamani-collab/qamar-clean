import type { Metadata } from 'next'
import { Oswald, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://qamar.53printers.com'),
  title: {
    default: 'Qamar Construction | Medical & Dental Facility Builder — Houston, TX',
    template: '%s | Qamar Construction',
  },
  description:
    'Qamar Construction delivers turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX and surrounding areas.',
  keywords: [
    'medical clinic construction Houston',
    'dental office construction Houston',
    'urgent care construction Houston',
    'medical facility builder Texas',
    'turnkey design build Houston',
    'healthcare construction contractor',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://qamar.53printers.com',
    siteName: 'Qamar Construction',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GeneralContractor'],
  name: 'Qamar Construction',
  description: 'Turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX and surrounding areas. Licensed and insured.',
  url: 'https://qamar.53printers.com',
  telephone: '+18327669246',
  email: 'contact@qamarconstruction.com',
  image: 'https://qamar.53printers.com/logo.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Houston',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 29.7604,
    longitude: -95.3698,
  },
  areaServed: [
    { '@type': 'City', name: 'Houston', containedInPlace: { '@type': 'State', name: 'Texas' } },
    { '@type': 'City', name: 'Katy' },
    { '@type': 'City', name: 'Sugar Land' },
    { '@type': 'City', name: 'The Woodlands' },
    { '@type': 'City', name: 'Pearland' },
    { '@type': 'City', name: 'Cypress' },
    { '@type': 'City', name: 'Pasadena' },
    { '@type': 'City', name: 'League City' },
    { '@type': 'City', name: 'Missouri City' },
  ],
  knowsAbout: [
    'Medical Clinic Construction',
    'Dental Office Construction',
    'Urgent Care Facility Construction',
    'Healthcare Design-Build',
    'Medical Facility Permitting Texas',
    'ADA Compliance Healthcare',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+18327669246',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
