'use client'

import type React from 'react'
import Image from 'next/image'
import { useState } from 'react'

interface PortfolioItem {
  id: string
  url: string
  alt: string
}

interface GalleryGridProps {
  portfolioItems: PortfolioItem[]
  layout?: 'grid' | 'masonry'
}

export default function GalleryGrid({
  portfolioItems,
  layout = 'grid',
}: GalleryGridProps) {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null)

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {portfolioItems.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden rounded-lg bg-muted"
          onClick={() => setSelectedPortfolioItem(item)}
        >
          <Image
            src={item.url}
            alt={item.alt}
            width={400}
            height={300}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}

      {/* Lightbox Modal */}
      {selectedPortfolioItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPortfolioItem(null)}
        >
          <div
            className="portfolio-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
              onClick={() => setSelectedPortfolioItem(null)}
              aria-label="Close image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Image
              src={selectedPortfolioItem.url}
              alt={selectedPortfolioItem.alt}
              width={1200}
              height={800}
              className="portfolio-lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  )
}