import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustTicker } from "@/components/sections/TrustTicker";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { StatsSection } from "@/components/sections/StatsSection";
import { PestIdentifier } from "@/components/sections/PestIdentifier";
import { Testimonials } from "@/components/sections/Testimonials";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="grain relative min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <TrustTicker />
        <ServicesSection />
        <HowItWorks />
        <StatsSection />
        <PestIdentifier />
        <BeforeAfter />
        <Testimonials />
        <PricingSection />
        <FAQSection />
        <ContactSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
