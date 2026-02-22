"use client"

import { useEffect, useRef, useState } from "react"

function MolecularVisualization() {
  return (
    <div className="relative flex h-80 w-80 items-center justify-center lg:h-96 lg:w-96">
      {/* Central glow */}
      <div className="absolute h-40 w-40 rounded-full bg-chart-1/20 blur-3xl" />

      {/* Outer ring */}
      <div className="absolute h-64 w-64 rounded-full border border-chart-1/10 lg:h-72 lg:w-72" />
      <div className="absolute h-48 w-48 rounded-full border border-chart-1/20 lg:h-56 lg:w-56" />
      <div className="absolute h-32 w-32 rounded-full border border-chart-1/20" />

      {/* Central molecule */}
      <div className="relative animate-float">
        {/* Core atom */}
        <div className="h-10 w-10 rounded-full bg-chart-1 shadow-[0_0_30px_rgba(59,130,246,0.6)]" />

        {/* Bond lines and atoms */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="mx-auto h-8 w-px bg-chart-1/40" />
          <div className="h-5 w-5 rounded-full bg-crimson shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
        </div>

        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <div className="h-5 w-5 rounded-full bg-crimson shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
          <div className="mx-auto h-8 w-px bg-chart-1/40" />
        </div>

        <div className="absolute -left-14 top-1/2 flex -translate-y-1/2 items-center">
          <div className="h-5 w-5 rounded-full bg-alabaster/80 shadow-[0_0_15px_rgba(248,250,252,0.3)]" />
          <div className="h-px w-8 bg-chart-1/40" />
        </div>

        <div className="absolute -right-14 top-1/2 flex -translate-y-1/2 items-center">
          <div className="h-px w-8 bg-chart-1/40" />
          <div className="h-5 w-5 rounded-full bg-alabaster/80 shadow-[0_0_15px_rgba(248,250,252,0.3)]" />
        </div>

        {/* Diagonal bonds */}
        <div className="absolute -right-10 -top-10">
          <div className="h-4 w-4 rounded-full bg-chart-1/60 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
        </div>
        <div className="absolute -bottom-10 -left-10">
          <div className="h-4 w-4 rounded-full bg-chart-1/60 shadow-[0_0_10px_rgba(59,130,246,0.4)]" />
        </div>
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
      <div className="absolute left-8 top-8 h-1.5 w-1.5 animate-pulse rounded-full bg-chart-1/40" />
      <div className="absolute bottom-12 right-12 h-2 w-2 animate-pulse rounded-full bg-crimson/30" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-8 left-16 h-1 w-1 animate-pulse rounded-full bg-alabaster/20" style={{ animationDelay: "2s" }} />
      <div className="absolute right-8 top-20 h-1.5 w-1.5 animate-pulse rounded-full bg-chart-1/30" style={{ animationDelay: "0.5s" }} />
    </div>
  )
}

export default function HeroSection() {
  const [showTypewriter, setShowTypewriter] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden pt-20">
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
            Premium peptide research compounds synthesized in the USA with {">"}99% purity. Trusted by laboratories nationwide for cutting-edge research.
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

        {/* Right: Molecular Visualization */}
        <div className="flex items-center justify-center">
          <MolecularVisualization />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
