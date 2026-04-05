"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    name: "बफ स्टीम म:म",
    type: "बफ",
    price: "१५० / प्लेट",
    description: "ताजा बफ मासु र विशेष मसलाको सन्तुलित स्वाद।",
    rating: 5,
  },
  {
    name: "चिकेन स्टीम म:म",
    type: "चिकेन",
    price: "२०० / प्लेट",
    description: "कलिलो चिकेन र स्वादिष्ट झोल अचारको साथ।",
    rating: 5,
  },
  {
    name: "भेज स्टीम म:म",
    type: "भेज",
    price: "१२० / प्लेट",
    description: "ताजा तरकारी र पनिरको उत्कृस्ट सम्मिश्रण।",
    rating: 4.8,
  },
  {
    name: "सी-म:म (C-Momo)",
    type: "पिरो",
    price: "२५० / प्लेट",
    description: "हाम्रो विशेष पिरो सस र तरकारीको साथ फ्राइड म:म।",
    rating: 4.9,
  },
];

export default function ProductGrid() {
  return (
    <section id="menu" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary text-[10px] font-black tracking-[0.3em] uppercase"
            >
              हाम्रो मेनु
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none"
            >
              ताजा <span className="text-primary italic">उत्पादनहरू</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary font-black text-[10px] uppercase tracking-widest"
          >
            <Star size={14} fill="currentColor" /> थोक बिक्रीमा विशेष छुट
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((momo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-secondary border border-white/5 rounded-3xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                  {momo.type}
                </span>
              </div>
              
              <div className="pt-6 space-y-4">
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                    {momo.name}
                  </h3>
                  <div className="flex items-center gap-0.5 text-primary mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} fill={i < Math.floor(momo.rating) ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
                
                <p className="text-slate-500 text-xs leading-relaxed font-medium line-clamp-2">
                  {momo.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">मूल्य</p>
                    <p className="text-2xl font-black text-white tracking-tighter">{momo.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-primary border border-white/5 group-hover:bg-primary group-hover:text-white transition-all shadow-lg"
                  >
                    <ShoppingCart size={18} strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


