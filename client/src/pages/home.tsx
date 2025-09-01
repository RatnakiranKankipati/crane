import { SEOHead } from "@/components/seo-head";
import { HeroSection } from "@/components/sections/hero";
import { KeyMetricsSection } from "@/components/sections/key-metrics";
import { FeaturesSection } from "@/components/sections/features";
import { IndustryImpactSection } from "@/components/sections/industry-impact";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <SEOHead />
      <HeroSection />
      <KeyMetricsSection />
      <FeaturesSection />
      <IndustryImpactSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
