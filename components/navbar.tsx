"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Research Catalog", href: "#catalog" },
  { label: "Quality Control", href: "#quality" },
  { label: "About", href: "#about" },
  { label: "My Account", href: "#account" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-navy-mid/50 shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl font-bold tracking-tight text-alabaster">
          RGV<span className="text-crimson">Peptides</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-alabaster/70 transition-colors hover:text-alabaster"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#login"
            className="rounded-lg border border-crimson/30 bg-crimson/10 px-5 py-2 text-sm font-semibold text-crimson transition-all hover:bg-crimson hover:text-alabaster"
          >
            Login
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-alabaster md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-navy-mid/30 bg-navy/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-alabaster/70 transition-colors hover:bg-navy-light hover:text-alabaster"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-crimson px-4 py-3 text-center text-sm font-semibold text-alabaster transition-colors hover:bg-crimson-dark"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
