import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL('https://prideautostore.in'),
  title: {
    default: 'Pride Auto Store | Automobile Spare Parts in Coimbatore',
    template: '%s | Pride Auto Store Coimbatore',
  },
  description:
    'Genuine automobile spare parts for Fiat, Padmini, and all car brands. Located in Grey Town, Coimbatore. Call 0422-4392481. Open 10AM–8PM.',
  keywords: [
    'automobile spare parts Coimbatore',
    'car parts Grey Town Coimbatore',
    'Fiat Padmini parts Coimbatore',
    'auto accessories Coimbatore',
    'Pride Auto Store',
  ],
  authors: [{ name: 'Pride Auto Store' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://prideautostore.in',
    siteName: 'Pride Auto Store',
    title: 'Pride Auto Store | Automobile Spare Parts in Coimbatore',
    description: 'Quality automobile spare parts in Grey Town, Coimbatore since decades.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pride Auto Store' }],
  },
  twitter: { card: 'summary_large_image', title: 'Pride Auto Store Coimbatore' },
  alternates: { canonical: 'https://prideautostore.in' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  name: 'Pride Auto Store',
  description: 'Automobile spare parts and accessories shop in Coimbatore',
  url: 'https://prideautostore.in',
  telephone: '+919944140272',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '9/23, Grey Town, Opposite Nehru Stadium Road',
    addressLocality: 'Coimbatore',
    addressRegion: 'Tamil Nadu',
    postalCode: '641014',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 11.0043, longitude: 76.9795 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens: '10:00', closes: '20:00',
    },
  ],
  image: 'https://prideautostore.in/og-image.jpg',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash',
  sameAs: ['https://www.instagram.com/fiat_padmini_/'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={geist.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        {/* Tawk.to live chat */}
        <Script id="tawkto" strategy="lazyOnload">
          {`var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/YOUR_TAWKTO_ID/1i...';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`}
        </Script>
      </body>
    </html>
  )
}