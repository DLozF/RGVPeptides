"use client"

import { useEffect, useRef } from "react"
import { FlaskConical, Snowflake, Flag, Award, Microscope, ShieldCheck } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Third-Party Tested",
    description: "Every batch is independently verified by accredited analytical laboratories using HPLC and MS methods.",
  },
  {
    icon: Snowflake,
    title: "Cold-Chain Shipping",
    description: "Temperature-controlled logistics from synthesis to delivery to ensure compound integrity and stability.",
  },
  {
    icon: Flag,
    title: "USA Synthesized",
    description: "All peptides are manufactured in our state-of-the-art, cGMP-compliant facility within the United States.",
  },
]

const stats = [
  { value: "99.8%", label: "Average Purity", icon: FlaskConical },
  { value: "500+", label: "Research Labs Served", icon: Microscope },
  { value: "48hr", label: "Avg. Fulfillment", icon: Award },
]

export default function TrustBar() {
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
    <section id="quality" ref={sectionRef} className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-navy-mid bg-navy-light/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Award className="h-3.5 w-3.5" />
            Assurance Standards
          </div>
          <h2 className="font-serif text-3xl font-bold text-alabaster md:text-4xl lg:text-5xl">
            Quality <span className="text-crimson">First</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our commitment to research integrity begins with rigorous quality controls at every stage of the synthesis pipeline.
          </p>
        </div>

        {/* Trust Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="reveal group rounded-xl border border-navy-mid bg-navy-light/20 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-chart-1/30 hover:bg-navy-light/40"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-chart-1/20 bg-chart-1/10 text-chart-1 transition-colors group-hover:bg-chart-1/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-alabaster">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="reveal mt-16 grid gap-px overflow-hidden rounded-xl border border-navy-mid bg-navy-mid md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 bg-navy-light/40 px-8 py-8 backdrop-blur-sm"
            >
              <stat.icon className="mb-1 h-5 w-5 text-crimson" />
              <span className="font-serif text-3xl font-bold text-alabaster">{stat.value}</span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
