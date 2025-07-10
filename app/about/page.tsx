"use client";

import React from 'react';
import { motion } from "framer-motion";
import { AboutUs } from '@/components/about-us';
import Navbar from '@/components/navbar';
import WhatsAppContact from '@/components/whatsapp_contact';

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

export function Page() {
  return (
    <>
      <Navbar />
      <WhatsAppContact />

      <FadeInSection delay={0.2}>
        <AboutUs />
      </FadeInSection>
    </>
  );
}
