"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Users, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-12 relative z-10 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-[10px] font-black tracking-[0.3em] uppercase"
            >
              सम्पर्क
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none"
            >
              हामीसँग <br /><span className="text-primary italic">जुड्नुहोस्</span>
            </motion.h2>
            <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed">
              थोक अर्डर वा जिज्ञासाका लागि हामी सधैँ उपलब्ध छौँ।
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://facebook.com" icon={<Users size={20} />} />
            <SocialLink href="https://wa.me/9801525044" icon={<MessageCircle size={20} />} />
          </div>
        </div>

        <div className="space-y-4 lg:col-span-1">
          <ContactCard
            icon={<MapPin size={22} className="text-primary" />}
            title="ठेगाना"
            content="बुढानिलकण्ठ-१०, काठमाडौँ"
          />
          <ContactCard
            icon={<Phone size={22} className="text-primary" />}
            title="फोन नम्बर"
            content="९८०१५२५०४४, ९७६५६१५२९१"
          />
        </div>

        <div className="relative group lg:col-span-1">
          <div className="absolute -inset-2 bg-primary/20 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative glass p-8 rounded-3xl space-y-6 border border-primary/20 bg-primary/5">
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase">थोक अफर</h3>
              <p className="text-slate-400 leading-relaxed text-xs font-medium">
                तपाइँको व्यवसायका लागि विशेष दरमा म:म अर्डर गर्न अहिले नै सम्पर्क गर्नुहोस्।
              </p>
            </div>
            <motion.a
              whileHover={{ translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="tel:9801525044"
              className="w-full py-4 bg-primary text-white font-black rounded-2xl flex items-center justify-center gap-2 text-sm btn-glow"
            >
              कल गर्नुहोस् <Phone size={18} strokeWidth={3} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/5 hover:border-primary/20 transition-all"
    >
      <div className="w-10 h-10 bg-zinc-900 flex-none flex items-center justify-center rounded-xl border border-white/5">
        {icon}
      </div>
      <div>
        <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{title}</p>
        <p className="text-white font-black text-sm leading-tight mt-0.5">{content}</p>
      </div>
    </motion.div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-white/5 rounded-xl text-slate-400 hover:text-primary hover:border-primary/20 transition-all"
    >
      {icon}
    </motion.a>
  );
}
