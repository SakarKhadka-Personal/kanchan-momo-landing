"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-start md:items-center justify-center pt-32 pb-12 overflow-hidden bg-zinc-950"
    >
      {/* High-Fidelity Immersive Background Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_delicious.png"
          alt="Kanchan MoMo Background"
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
          quality={95}
        />

        {/* Professional Overlay System */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/10" />
      </div>


      {/* Perfectly Centered Content with Navbar Clearance */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md shadow-2xl">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,177,64,1)]" />
            <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase">
              शत् प्रतिशत शुद्धता
            </span>
          </div>

          {/* Heading with sharpened readability */}
          <h1 className="text-4xl md:text-8xl font-black leading-none tracking-tighter text-white uppercase drop-shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
            ताजगी र <span className="text-primary italic">स्वाद</span>
            <br />
            को संगम म:म
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto font-bold leading-relaxed drop-shadow-2xl px-4">
            बुढानिलकण्ठको अत्याधुनिक उत्पादन केन्द्रबाट ताजा, स्वस्थकर र उच्च
            गुणस्तरको म:म उत्पादन गरी तपाईंको सेवामा उपलब्ध छ।
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-6 pt-6">
            <motion.a
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              href="tel:9801525044"
              className="px-12 py-5 bg-primary text-white font-black rounded-full flex items-center gap-3 text-sm btn-glow shadow-[0_20px_50px_rgba(0,177,64,0.3)] transition-all"
            >
              अर्डर गर्नुहोस् <ChevronRight size={20} strokeWidth={3} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/9801525044"
              className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-full border border-white/20 flex items-center gap-3 text-sm hover:bg-white/10 transition-all shadow-2xl"
            >
              <MessageCircle size={20} className="text-primary" />
              ह्वाट्सएप
            </motion.a>
          </div>

          {/* Stats with refined alignment */}
          <div className="flex justify-center gap-12 pt-12 border-t border-white/10 max-w-xl mx-auto w-full">
            <StatItem value="१००%" label="शुद्धता" />
            <StatItem value="५०००+" label="दैनिक उत्पादन" />
            <StatItem value="द्रुत" label="डेलिभरी" />
          </div>
        </motion.div>
      </div>

      {/* Decorative accent bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-linear-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-xl font-black text-white">{value}</p>
      <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">
        {label}
      </p>
    </div>
  );
}
