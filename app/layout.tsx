'use client'

import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
  display: 'swap',
})

],
  creator: 'Finca La Pedrera',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.fincalapedrera.com',
    title: 'Finca La Pedrera | Luxury Estate & Tourism Experience',
    description: 'Experience unparalleled privacy and luxury at Finca La Pedrera, a serene escape immersed in nature with authentic architectural heritage.',
    siteName: 'Finca La Pedrera',
    images: [
      {
        url: 'https://picsum.photos/id/1027/1200/630',
        width: 1200,
        height: 630,
        alt: 'Finca La Pedrera Luxury Estate - Immersive Nature Experience',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finca La Pedrera | Luxury Estate & Tourism Experience',
    description: 'Experience unparalleled privacy and luxury at Finca La Pedrera, a serene escape immersed in nature with authentic architectural heritage.',
    images: ['https://picsum.photos/id/1027/1200/630'],
  },
  alternates: {
    canonical: 'https://www.fincalapedrera.com',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${roboto.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script
          src="https://app.framed.dev/tm.js"
          data-framed-project="db76f402-ae78-4c78-90b2-004bf891d094"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
