'use client'

import type React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PropertyCardProps {
  title: string
  price: string
  image: string
  badge?: string
  link?: string
}

export default function PropertyCard({
  title,
  price,
  image,
  badge,
  link = '#',
}: PropertyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-background shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {badge}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-3">
          <h3 className="luxury-font text-xl font-bold text-foreground">{title}</h3>
        </div>
        <div className="mb-6 flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <span className="text-muted-foreground">/night</span>
        </div>
        {link && link !== '#' ? (
          <Link
            href={link}
            className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            View Details
          </Link>
        ) : (
          <button
            className="inline-flex w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  )
}
