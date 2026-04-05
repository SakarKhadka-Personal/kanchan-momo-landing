"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-2 shadow-xl" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,177,64,0.3)] group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-black text-xl uppercase tracking-tighter">KM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-white uppercase leading-none">
              कञ्चन म:म <span className="text-primary italic">प्रोडक्सन</span>
            </span>
            <span className="text-[9px] text-primary/80 font-bold uppercase tracking-[0.2em] mt-0.5">
              शत् प्रतिशत शुद्धता
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="#home">होम</NavLink>
          <NavLink href="#services">सेवाहरू</NavLink>
          <NavLink href="#menu">मेनु</NavLink>
          <NavLink href="#contact">सम्पर्क</NavLink>
        </div>

        <div className="flex items-center gap-5">
          <div className="hidden sm:block text-right">
            <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest leading-none">सम्पर्क</p>
            <p className="text-xs font-black text-white mt-1">9801525044</p>
          </div>
          <a
            href="tel:9801525044"
            className="px-6 py-2.5 bg-primary text-white font-black rounded-xl text-xs btn-glow transition-all"
          >
            अर्डर गर्नुहोस्
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-tight"
    >
      {children}
    </Link>
  );
}

