"use client";
import React, { useEffect, useRef, useState } from "react";

export const SocialProof = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [itemSpacing, setItemSpacing] = useState(20); // default gap en px

  // Ajustamos espacio entre items según pantalla
  useEffect(() => {
    const updateSpacing = () => {
      const width = window.innerWidth;
      if (width < 640) setItemSpacing(8); // sm
      else if (width < 1024) setItemSpacing(16); // md
      else setItemSpacing(24); // lg+
    };

    updateSpacing();
    window.addEventListener("resize", updateSpacing);
    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  // Animación de scroll infinito
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    const itemWidth = 320 + itemSpacing;
    const totalItems = 10;
    const oneSetWidth = itemWidth * totalItems;

    const animate = () => {
      if (!container || isHovered) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      scrollPosition += scrollSpeed;
      if (scrollPosition >= oneSetWidth) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, itemSpacing]);

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: `Company ${i + 1}`,
    logo: `Logo ${i + 1}`,
  }));

  return (
    <div className="relative w-full overflow-hidden py-10 max-w-4xl ">
      <p className="text-center text-base md:text-xl font-bold text-white/50 mb-6">
        Over 50+ businesses trust us
      </p>

      {/* Gradientes laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#010101] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#010101] to-transparent z-10" />

      <div
        ref={scrollRef}
        className="flex overflow-hidden gap-2 sm:gap-2 md:gap-4 lg:gap-6"
        style={{ scrollBehavior: "auto", width: "100%" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={`${item.id}-${Math.floor(i / 10)}`}
            className="w-40 md:w-52  h-20 rounded-lg shrink-0 flex items-center justify-center text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center">
              <div className="text-lg">{item.logo}</div>
              <div className="text-sm opacity-80">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProof;
