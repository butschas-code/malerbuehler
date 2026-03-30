"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface MaterialSwipeCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

export function MaterialSwipeCard({
  number,
  title,
  description,
  image,
  index,
}: MaterialSwipeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass rounded-xl overflow-hidden glow-hover transition-all duration-300 cursor-pointer border-gradient"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Gradient Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-brand/40 to-transparent mix-blend-overlay"
        />
        
        {/* Noise Texture Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 noise"
        />

        {/* Number Badge */}
        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full">
          <span className="font-display text-sm font-bold text-brand">{number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-brand transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
