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
  metadataBase: new URL('https://medicaldentaldesignbuild.com'),
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
    'medical dental design build Houston',
    'healthcare facility contractor Texas',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medicaldentaldesignbuild.com',
    siteName: 'Qamar Construction',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Qamar Construction — Medical & Dental Facility Builder, Houston TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qamar Construction | Medical & Dental Facility Builder — Houston, TX',
    description: 'Turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: 'https://medicaldentaldesignbuild.com',
    types: {
      'application/rss+xml': 'https://medicaldentaldesignbuild.com/feed.xml',
    },
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

const BASE = 'https://medicaldentaldesignbuild.com'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: 'Qamar Construction — Medical Dental Design Build',
  description: 'Turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX.',
  publisher: {
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: 'Qamar Construction',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE}/locations/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GeneralContractor'],
  '@id': `${BASE}/#organization`,
  name: 'Qamar Construction',
  description: 'Turnkey design-build for medical clinics, dental offices, and urgent care centers in Houston, TX and surrounding areas. Licensed and insured.',
  url: BASE,
  telephone: '+18327669246',
  email: 'contact@qamarconstruction.com',
  image: `${BASE}/logo.png`,
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
    'HIPAA-Ready Facility Design',
    'Texas DSHS Healthcare Licensing',
    'Dental Operatory Build-Out',
    'Radiation Shielding Construction',
  ],
  sameAs: [
    'https://www.facebook.com/qamarconstruction/',
    'https://www.linkedin.com/company/qamar-construction/',
    'https://www.yelp.com/biz/qamar-remodeling-and-construction-houston',
    'https://www.bbb.org/us/tx/houston/profile/remodeling/qamar-construction-0915-90020878',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '9',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Healthcare Facility Construction Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Medical Clinic Construction',
          url: `${BASE}/medical-clinics`,
          description: 'Full-scope design-build for primary care, specialty, and multi-physician medical clinics in Houston, TX.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dental Office Construction',
          url: `${BASE}/dental-clinics`,
          description: 'Expert dental office build-outs with operatory layout, plumbing, and equipment coordination in Houston, TX.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Urgent Care Center Construction',
          url: `${BASE}/urgent-care`,
          description: 'Fast-track urgent care facility construction and retail-to-medical conversions in Houston, TX.',
        },
      },
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+18327669246',
    contactType: 'customer service',
    availableLanguage: 'English',
    contactOption: 'TollFree',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
