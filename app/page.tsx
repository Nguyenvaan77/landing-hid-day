import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductIntroSection from "@/components/ProductIntroSection"
import LeGaiDetailSection from "../components/LeGaiDetailSection"
import NuHoeDetailSection from "../components/NuHoeDetailSection"
import TaoDoDetailSection from "../components/TaoDoDetailSection"
import BenefitsSection from "@/components/BenefitsSection"
import HowToBrewSection from "@/components/HowToBrewSection"
import BrandStorySection from "@/components/BrandStorySection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-herb-green-50">
      <Header />
      <HeroSection />
      <ProductIntroSection />

      {/* Chi tiết từng sản phẩm */}
      <LeGaiDetailSection />
      <NuHoeDetailSection />
      <TaoDoDetailSection />

      <BenefitsSection />
      <HowToBrewSection />
      {/* <BrandStorySection /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
