"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      const sections = ["home","about","experience","projects","contact"];
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = s;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 py-4 
      bg-gradient-to-r from-[#1e3a8a]/10 via-[#2563eb]/35 to-[#ef4444]/30 
      backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <div className="text-white font-bold">Aina Nirina RANDRIA</div>
          </div>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`text-md ${active === l.id ? "text-accent" : "text-[#9fb3d8]"} hover:text-white transition`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
