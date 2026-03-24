'use client'

import type React from 'react'
import Link from 'next/link'

interface CTASectionProps {
  heading: string
  description: string
  buttonText: string
  link: string
  backgroundColor?: string
}

export default function CTASection({
  heading,
  description,
  buttonText,
  link,
  backgroundColor = 'bg-accent',
}: CTASectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${backgroundColor} text-center`}
      aria-label="Call to Action Section"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="luxury-font mb-6 text-3xl font-bold text-accent-foreground md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-10 text-lg md:text-xl text-accent-foreground/90">
            {description}
          </p>
          <Link
            href={link}
            className="inline-flex items-center justify-center rounded-lg bg-accent-foreground px-8 py-4 text-base font-medium text-accent md:px-10 md:py-5 md:text-lg transition-colors hover:bg-white/20"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
