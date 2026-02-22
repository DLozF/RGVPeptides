"use client"

import { useEffect, useRef } from "react"
import { ShieldCheck, FileDown, FlaskConical } from "lucide-react"

const products = [
  {
    name: "BPC-157",
    category: "Pentadecapeptide",
    weight: "1503.74 g/mol",
    purity: "99.8%",
    description: "A 15-amino acid peptide fragment derived from human gastric juice protein for laboratory research.",
  },
  {
    name: "TB-500",
    category: "Thymosin Beta-4 Fragment",
    weight: "4963.50 g/mol",
    purity: "99.7%",
    description: "Synthetic peptide segment of the naturally occurring thymosin beta-4 protein for in-vitro studies.",
  },
  {
    name: "Retatrutide",
    category: "Triple Hormone Receptor Agonist",
    weight: "5145.74 g/mol",
    purity: "99.8%",
    description: "A synthetic peptide that targets GIP, GLP-1, and glucagon receptors for investigative metabolic research.",
  },
  {
    name: "CJC-1295",
    category: "GHRH Analog",
    weight: "3367.97 g/mol",
    purity: "99.8%",
    description: "Tetrasubstituted peptide analog of growth hormone-releasing hormone for pharmacokinetic research.",
  },
  {
    name: "Ipamorelin",
    category: "Growth Hormone Secretagogue",
    weight: "711.85 g/mol",
    purity: "99.9%",
    description: "Selective pentapeptide ghrelin receptor agonist for growth hormone secretion pathway studies.",
  },
  {
    name: "Tirzepatide",
    category: "Dual GIP/GLP-1 Agonist",
    weight: "4813.53 g/mol",
    purity: "99.9%",
    description: "A 39-amino acid synthetic peptide for research into synergistic incretin hormone receptor binding.",
  },
]

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="catalog" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <FlaskConical className="h-3.5 w-3.5" />
            Research Compounds
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            Research <span className="text-crimson">Portfolio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Browse our catalog of high-purity peptide compounds, each accompanied by third-party verified Certificates of Analysis.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="reveal group relative overflow-hidden rounded-xl border border-navy-mid bg-navy-light/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-chart-1/30 hover:bg-navy-light/60"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Purity Badge */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-chart-1/30 bg-chart-1/10 px-2.5 py-0.5 text-xs font-semibold text-chart-1">
                  <ShieldCheck className="h-3 w-3" />
                  Purity: {product.purity}
                </span>
              </div>

              {/* Product Name */}
              <h3 className="font-serif text-xl font-bold text-alabaster">{product.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">MW: {product.weight}</p>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              {/* Actions */}
              <div className="mt-6 flex items-center gap-3">
                <button className="animate-pulse-crimson flex-1 rounded-lg bg-crimson px-4 py-2.5 text-xs font-semibold text-alabaster transition-colors hover:bg-crimson-dark">
                  Add to Inquiry
                </button>
                <button className="inline-flex items-center gap-1.5 rounded-lg border border-navy-mid px-3 py-2.5 text-xs font-medium text-muted-foreground transition-colors hover:border-alabaster/30 hover:text-alabaster">
                  <FileDown className="h-3.5 w-3.5" />
                  COA
                </button>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-crimson transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
