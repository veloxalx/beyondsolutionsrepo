"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import EliteSolutions from "@/components/elite-solutions";
import PremiumClientLogos from "@/components/premium-client-logos";
import SuperiorResults from "@/components/superior-results";
import EliteCaseStudies from "@/components/elite-case-studies";
import ExclusiveProcess from "@/components/exclusive-process";
import { cn } from "@/lib/utils";
import IndustryLeadership from "@/components/industry-leadership";
import AwardsRecognition from "@/components/awards-recognition";
import Hero from "@/components/hero";
import CTASection from "@/components/cta-section";
import WhatsAppContact from "@/components/whatsapp_contact";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={cn(
        "min-h-screen flex flex-col bg-white",
        isLoaded ? "opacity-100" : "opacity-0"
      )}
    >
      <Navbar />

      {/* Hero Section */}
      <WhatsAppContact/>
      <Hero />

      {/* Awards & Recognition */}
      <AwardsRecognition />

      {/* Premium Client Logos */}
      <PremiumClientLogos />

      {/* Superior Results */}
      <SuperiorResults />

      {/* Industry Leadership */}
      <IndustryLeadership />

      {/* Elite Solutions */}
      <EliteSolutions />

      {/* Elite Case Studies */}
      <EliteCaseStudies />

      {/* Exclusive Process */}
      <ExclusiveProcess />

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
