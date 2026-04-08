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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${lato.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
