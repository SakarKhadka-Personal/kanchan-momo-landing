"use client";

import { motion } from "framer-motion";
import { Truck, Store, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Truck className="text-primary" size={32} />,
    title: "थोक बिक्री (Wholesale)",
    description: "रेस्टुरेन्ट, पार्टी प्यालेस र पसलहरूका लागि विशेष छुटमा ताजा म:म उपलब्ध छ।",
    highlight: "१०००+ उत्पादन दैनिक",
  },
  {
    icon: <Store className="text-primary" size={32} />,
    title: "खुद्रा बिक्री (Retail)",
    description: "तपाईंको घरमै पकाउन सजिलो प्याकिङ र स्वादिलो चटनी सहितको म:म।",
    highlight: "ताजा डेलिभरी",
  },
  {
    icon: <Zap className="text-primary" size={32} />,
    title: "छिटो डेलिभरी",
    description: "काठमाडौँ भित्र अर्डर गरेको केही समयमै सुरक्षित डेलिभरीको व्यवस्था।",
    highlight: "२ घण्टा भित्र",
  },
  {
    icon: <ShieldCheck className="text-primary" size={32} />,
    title: "शुद्ध सामग्री",
    description: "हामी सधैँ उच्च गुणस्तरको मासु र ताजा मसलाहरू प्रयोग गर्छौँ।",
    highlight: "हाइजेनिक पद्धति",
  },
];

export default function ServiceFeatures() {
  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-3 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] font-black tracking-[0.3em] uppercase"
          >
            हाम्रा विशेषता
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase"
          >
            किन <span className="text-primary italic">कञ्चन म:म?</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ translateY: -5 }}
              className="glass p-8 rounded-3xl group border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-primary group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-black text-white mb-2 tracking-tight uppercase group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {feature.description}
              </p>
              <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase tracking-widest rounded-lg">
                {feature.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


