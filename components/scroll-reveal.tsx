"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal, .reveal-left").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
