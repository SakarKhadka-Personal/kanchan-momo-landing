"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/hero.png"
                alt="Quality Momo Production"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl border border-primary/20 shadow-2xl hidden md:block group">
              <p className="text-3xl font-black text-primary tracking-tighter italic leading-none">शत् प्रतिशत</p>
              <p className="text-xs font-black text-white uppercase tracking-[0.2em] mt-2">शुद्धता हाम्रो सान</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <div className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">
                हाम्रो बारेमा
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                गुणस्तर नै <br /><span className="text-primary italic">हाम्रो पहिचान</span>
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                कञ्चन म:म प्रोडक्सन, बुढानिलकण्ठ-१० मा अवस्थित एक अत्याधुनिक म:म उत्पादन केन्द्र हो। हामी सधैँ ताजा र शुद्ध सामग्रीहरू प्रयोग गरी उच्च गुणस्तरको म:म उत्पादन गर्छौँ।
              </p>
            </div>

            <div className="space-y-5">
              <AboutItem
                icon={<CheckCircle2 className="text-primary" size={20} />}
                title="शुद्ध सामग्री"
                description="ताजा र शुद्ध सामग्रीहरूको मात्र प्रयोग।"
              />
              <AboutItem
                icon={<Award className="text-primary" size={20} />}
                title="गुणस्तर सेवा"
                description="ग्राहकको स्वास्थ्य र स्वाद नै पहिलो प्राथमिकता।"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function AboutItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-5 group">
      <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center flex-none border border-white/5 group-hover:bg-primary group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-black text-lg tracking-tight uppercase mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
