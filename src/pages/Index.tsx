import Navbar from "@/components/Navbar";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import HeroSection from "@/components/HeroSection";

import TechDiagram from "@/components/TechDiagram";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen bg-background relative">
    <BackgroundOrbs />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />          {/* dark */}

      <SectionDivider from="dark" />
      <TechDiagram />          {/* light */}
      <SectionDivider from="light" />
      <HowItWorks />           {/* dark */}
      <SectionDivider from="dark" />
      <UseCases />             {/* light */}
      <SectionDivider from="light" />
      <Features />             {/* dark */}
      <SectionDivider from="dark" />
      <Testimonials />         {/* light */}
      <SectionDivider from="light" />
      <Pricing />              {/* dark */}
      <SectionDivider from="dark" />
      <BlogSection />          {/* light */}
      <SectionDivider from="light" />
      <FAQSection />           {/* dark */}
      <SectionDivider from="dark" />
      <ContactSection />       {/* light */}
      <SectionDivider from="light" />
      <Footer />               {/* dark */}
    </div>
  </div>
);

export default Index;
