import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import TrustBar from "@/components/trust-bar"
import Footer from "@/components/footer"

export default function Home() {
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
