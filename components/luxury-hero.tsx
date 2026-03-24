'use client'

import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LuxuryHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  actionText?: string
  actionLink?: string
  alignLeft?: boolean
}

export default function LuxuryHero({
  title,
  subtitle,
  backgroundImage,
  actionText = 'Explore Our Estate',
  actionLink = '/contact',
  alignLeft = true,
}: LuxuryHeroProps) {
  return (
    <section
      className="relative h-[80vh] w-full overflow-hidden bg-black"
      aria-label="Luxury Estate Hero Section"
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Luxury estate exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full items-center px-4 md:px-6">
        <div
          className={`max-w-3xl ${alignLeft ? 'text-left' : 'text-center'} text-white`}
        >
          <h1 className="luxury-font mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-100">
            {subtitle}
          </p>
          {actionText && (
            <Link
              href={actionLink}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:text-base"
            >
              {actionText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}