import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import TrustBar from "@/components/trust-bar"
import Footer from "@/components/footer"

export default function Home() {
  console.log("[v0] Home page rendering on server")
  return (
    <div className="topo-bg min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <TrustBar />
      </main>
      <Footer />
    </div>
  )
}
