 'use client'

import type React from 'react'
import Image from 'next/image'
import { useState } from 'react'

interface PortfolioImage {
  id: string
  url: string
  alt: string
}

interface GalleryGridProps {
  portfolioImages: PortfolioImage[]
  layout?: 'grid' | 'masonry'
}

const lightboxContainerClass = "relative max-h-[90vh] max-w-[90vw]"
const lightboxImageClass = "h-auto max-h-[85vh] w-auto rounded-lg"

export default function GalleryGrid({
  portfolioImages,
  layout = 'grid',
}: GalleryGridProps) {
  const [activePortfolioImage, setActivePortfolioImage] = useState<PortfolioImage | null>(null)

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {portfolioImages.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-lg bg-muted"
          onClick={() => setActivePortfolioImage(image)}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={400}
            height={300}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}

      {/* Lightbox Modal */}
      {activePortfolioImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActivePortfolioImage(null)}
        >
          <div
            className={lightboxContainerClass}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 z-10 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
              onClick={() => setActivePortfolioImage(null)}
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
              src={activePortfolioImage.url}
              alt={activePortfolioImage.alt}
              width={1200}
              height={800}
              className={lightboxImageClass}
            />
          </div>
        </div>
      )}
    </div>
  )
}