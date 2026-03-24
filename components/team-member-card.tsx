'use client'

import type React from 'react'
import Image from 'next/image'

interface TeamMemberCardProps {
  name: string
  role: string
  image: string
  bio?: string
}

export default function TeamMemberCard({ name, role, image, bio }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-lg bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="luxury-font text-xl font-bold text-foreground">{name}</h3>
      <p className="text-sm text-primary mb-3">{role}</p>
      {bio && (
        <p className="text-base text-muted-foreground">
          {bio}
        </p>
      )}
      <div className="mt-6 flex gap-4">
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={`${name}'s Twitter profile`}
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
