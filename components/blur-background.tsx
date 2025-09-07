"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface BlurBackgroundProps {
  src: string
  alt?: string
  overlay?: "light" | "dark" | "gradient" | "none"
  blurIntensity?: "sm" | "md" | "lg" | "xl"
  className?: string
  children?: React.ReactNode
}

export function BlurBackground({
  src,
  alt = "Background",
  overlay = "dark",
  blurIntensity = "md",
  className = "",
  children,
}: BlurBackgroundProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  }

  const overlayClasses = {
    light: "bg-white/30",
    dark: "bg-yellow/60",
    gradient: "bg-gradient-to-b from-yellow/40 via-yellow/60 to-yellow/80",
    none: "",
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          priority
        />

        {/* Overlay with blur */}
        <div className={`absolute inset-0 ${overlayClasses[overlay]} ${blurClasses[blurIntensity]}`} />

        {/* Fallback gradient while image loads */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/50 via-zinc-900 to-yellow" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
