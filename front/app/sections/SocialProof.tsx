"use client";
import React, { useEffect, useRef, useState } from "react";

export const SocialProof = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const phrases = [
    "We don’t just run campaigns — we build movements.",
    "Your funnel is your story. We make it unforgettable.",
    "Data drives us. Intuition defines us.",
    "Growth is a system — not a lucky trend.",
    "You don’t need more ads. You need better strategy.",
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!container || isHovered) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      container.scrollLeft += scrollSpeed;

      // Reset scroll when reaching half (because we duplicated the content)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div className="relative w-full overflow-hidden py-10 max-w-6xl mx-auto">
      <p className="text-center text-base md:text-xl font-bold text-white/60 mb-6">
        Over 50+ businesses trust us because:
      </p>

      {/* Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#010101] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#010101] to-transparent z-10" />

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 md:gap-8 overflow-hidden"
        style={{ scrollBehavior: "auto", width: "100%" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...phrases, ...phrases].map((text, index) => (
          <div
            key={index}
            className="w-64 md:w-80 h-24 flex-shrink-0 bg-neutral-900 rounded-xl flex items-center justify-center text-white font-medium text-center px-4 shadow-md hover:shadow-xl transition duration-300"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
