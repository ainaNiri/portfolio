"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function TwoLayerCard({ title, subtitle, children }: Props) {
  const [hovered, setHovered] = useState(true);

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={() => setHovered(false)}
      onMouseLeave={() => setHovered(true)}
    >
      {/* Base Layer */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-[#0a0f1a] border border-white/50 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.8),inset_-4px_-4px_10px_rgba(255,255,255,0.03)]"
        initial={{ y: 0, x: 0 }}
        animate={{ y: hovered ? -6 : 0, x: hovered ? -6 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-30" />
      </motion.div>

      {/* Top Layer */}
      <motion.div
        className="relative z-10 m-1 h-90 xl:h-85 rounded-xl overflow-auto bg-[#101826] border border-white/10 p-6 shadow-[8px_8px_20px_rgba(0,0,0,0.7),-4px_-4px_12px_rgba(255,255,255,0.05)]"
        initial={{ y: 0, x: 0 }}
        animate={{ y: hovered ? -15 : 0, x: hovered ? 3 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {subtitle && (
          <p className="text-xs text-[#9fb3d8] mt-1">{subtitle}</p>
        )}
        <div className="mt-4 text-[#cfe6ff] text-sm leading-relaxed">
          {children}
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
          animate={{ opacity: hovered ? 0.9 : 0.4 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
