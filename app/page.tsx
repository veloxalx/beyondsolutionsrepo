"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import EliteSolutions from "@/components/elite-solutions";
import PremiumClientLogos from "@/components/premium-client-logos";
import SuperiorResults from "@/components/superior-results";
import EliteCaseStudies from "@/components/elite-case-studies";
import ExclusiveProcess from "@/components/exclusive-process";
import IndustryLeadership from "@/components/industry-leadership";
import AwardsRecognition from "@/components/awards-recognition";
import Hero from "@/components/hero";
import CTASection from "@/components/cta-section";
import WhatsAppContact from "@/components/whatsapp_contact";
import ServiceGallery from "@/components/gallery";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FadeInSection = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Fixed navbar - renders outside main content flow */}
      <Navbar />
      <WhatsAppContact />

      <main
        className={cn(
          "min-h-screen bg-black transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      >
        <FadeInSection>
          <div className="-mt-20 md:-mt-24 lg:-mt-32">
            <Hero />
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <PremiumClientLogos />
        </FadeInSection>
        <FadeInSection delay={0.3}>
          <SuperiorResults />
        </FadeInSection>
        <FadeInSection delay={0.1}>
          <AwardsRecognition />
        </FadeInSection>
        {/* <FadeInSection delay={0.4}>
          <IndustryLeadership />
        </FadeInSection> */}
        <FadeInSection delay={0.6}>
          <EliteCaseStudies />
        </FadeInSection>
        <FadeInSection delay={0.6}>
          <ServiceGallery />
        </FadeInSection>

        {/* <FadeInSection delay={0.5}>
          <EliteSolutions />
        </FadeInSection> */}

        <FadeInSection delay={0.7}>
          <ExclusiveProcess />
        </FadeInSection>

        {/* <FadeInSection delay={0.8}>
          <CTASection />
        </FadeInSection> */}

        <Footer />

        {/* Bottom padding to account for fixed navbar */}
        <div className="h-16 md:h-20" />
      </main>
    </>
  );
}
