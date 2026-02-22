"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:justify-between lg:gap-8">
        {/* Left: Text */}
        <div className="flex max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson animate-pulse" />
            Research-Grade Peptides
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-alabaster md:text-6xl lg:text-7xl">
            RGV<span className="text-crimson">Peptides</span>
          </h1>

          <div className="mt-4 h-10">
            {showTypewriter && (
              <p className="typewriter-text font-mono text-lg text-muted-foreground md:text-xl">
                Ascending the Valley
              </p>
            )}
          </div>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Specializing in high-purity <span className="text-alabaster font-semibold">Retatrutide</span> and <span className="text-alabaster font-semibold">Tirzepatide</span> research compounds. Synthesized in the USA with {">"}99% purity for precise laboratory investigation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#catalog"
              className="animate-pulse-crimson rounded-lg bg-crimson px-8 py-3.5 text-sm font-semibold text-alabaster transition-colors hover:bg-crimson-dark"
            >
              Explore Research Catalog
            </a>
            <a
              href="#quality"
              className="rounded-lg border border-navy-mid px-8 py-3.5 text-sm font-semibold text-alabaster transition-colors hover:border-alabaster/30 hover:bg-navy-light"
            >
              Quality Assurance
            </a>
          </div>
        </div>

        {/* Right: Logo with glow effect */}
        <div className="relative flex items-center justify-center">
          {/* Outer glow rings */}
          <div className="absolute h-80 w-80 rounded-full border border-chart-1/10 lg:h-96 lg:w-96" />
          <div className="absolute h-64 w-64 rounded-full border border-crimson/10 lg:h-80 lg:w-80" />

          {/* Animated glow behind logo */}
          <div className="absolute h-56 w-56 rounded-full bg-chart-1/10 blur-3xl lg:h-64 lg:w-64" />
          <div className="absolute h-40 w-40 rounded-full bg-crimson/8 blur-2xl lg:h-48 lg:w-48" />

          {/* Logo */}
          <div className="animate-float relative">
            <img
              src="/images/logo.png"
              alt="RGVPeptides - Texas peptide research company"
              className="h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] lg:h-80"
            />
          </div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-orbit">
              <div className="h-3 w-3 rounded-full bg-crimson/70 shadow-[0_0_8px_rgba(225,29,72,0.5)]" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-orbit-reverse">
              <div className="h-2 w-2 rounded-full bg-chart-1/70 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            </div>
          </div>

          {/* Floating small particles */}
          <div className="absolute left-4 top-8 h-1.5 w-1.5 animate-pulse rounded-full bg-chart-1/40" />
          <div className="absolute bottom-12 right-8 h-2 w-2 animate-pulse rounded-full bg-crimson/30" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-8 left-16 h-1 w-1 animate-pulse rounded-full bg-alabaster/20" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
