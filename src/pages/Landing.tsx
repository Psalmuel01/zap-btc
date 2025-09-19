import { HeroSection } from "@/components/HeroSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SponsorsSection />
      <HowItWorksSection />
      <FAQSection />
    </div>
  );
}