"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceFeatures from "@/components/ServiceFeatures";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Perfect duration for the animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden selection:bg-primary selection:text-black">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary flex items-center justify-center shadow-[0_0_60px_rgba(0,177,64,0.5)] border-4 border-white/10"
              >
                <div className="relative w-[85%] h-[85%]">
                  <Image
                    src="/images/momo-loading.png"
                    alt="Loading MoMo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary" />
              </motion.div>

              <div className="space-y-3 text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-[10px] text-primary/80 uppercase tracking-[0.5em] font-black animate-pulse"
                >
                  कञ्चन म:म लोड हुँदैछ
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl font-black text-white tracking-widest uppercase italic"
                >
                  उत्कृष्ट <span className="text-primary">स्वाद</span>
                </motion.h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <Navbar />
          <main>
            <Hero />
            <ServiceFeatures />
            <AboutSection />
            <ProductGrid />
            <ContactInfo />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
