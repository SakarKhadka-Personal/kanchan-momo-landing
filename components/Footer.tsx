"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 bg-black border-t border-white/5 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-[0_0_20px_rgba(0,177,64,0.3)] group-hover:scale-110 transition-transform">KM</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter uppercase whitespace-nowrap">कञ्चन म:म</span>
              <span className="text-[8px] text-primary font-black uppercase tracking-[0.3em] leading-none">प्रोडक्सन</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest font-black max-w-[200px]">शत् प्रतिशत शुद्धता, प्रथम प्राथमिकता। हामी गुणस्तरमा विश्वास गर्छौँ।</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 border-b border-primary/20 pb-2 w-fit">नेभिगेसन</h4>
          <FooterLink href="#home">होम</FooterLink>
          <FooterLink href="#services">सेवाहरू</FooterLink>
          <FooterLink href="#menu">मेनु</FooterLink>
          <FooterLink href="#contact">सम्पर्क</FooterLink>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 border-b border-primary/20 pb-2 w-fit">सम्पर्क</h4>
          <div className="space-y-3">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-black">बुढानिलकण्ठ-१०, काठमाडौँ</p>
            <p className="text-sm text-white font-black tracking-tighter">९८०१५२५०४४, ९७६५६१५२९१</p>
            <p className="text-xs text-primary font-black uppercase tracking-widest">info@kanchanmomo.com</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 border-b border-primary/20 pb-2 w-fit">हामीलाई पछ्याउनुहोस्</h4>
          <div className="flex gap-4">
            <SocialLinkSmall href="https://wa.me/9801525044" icon={<MessageCircle size={18} />} color="text-green-500" />
            <SocialLinkSmall href="tel:9801525044" icon={<Phone size={18} />} color="text-primary" />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-slate-600 uppercase tracking-[0.3em] font-black">© २०२४ कन्चन म:म प्रोडक्सन। पूर्ण अधिकार सुरक्षित।</p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">बुढानिलकण्ठ, काठमाडौँ</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLinkSmall({ href, icon, color }: { href: string; icon: React.ReactNode; color: string }) {
  return (
    <a href={href} className={`w-12 h-12 bg-zinc-900 border border-white/5 ${color} flex items-center justify-center rounded-2xl hover:bg-white hover:text-black transition-all hover:border-white shadow-xl`}>
      {icon}
    </a>
  );
}


function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-slate-500 hover:text-primary transition-colors uppercase font-bold tracking-tight">
      {children}
    </Link>
  );
}
