import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { ProcessSection } from "@/components/ProcessSection"
import { ClientTypesSection } from "@/components/ClientTypesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { PricingSection } from "@/components/PricingSection"
import { FaqSection } from "@/components/FaqSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { TelegramWidget } from "@/components/TelegramWidget"
import { OfferPopup } from "@/components/OfferPopup"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ClientTypesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <TelegramWidget />
      <OfferPopup />
    </main>
  )
}