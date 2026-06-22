"use client";

import { useEffect, useState } from "react";

// Greetings span the agency's reach: London, Mumbai (Hindi + Marathi), and beyond.
const greetings = ["Hello", "नमस्ते", "السلام", "Bonjour", "Hola"];

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [revealing, setRevealing] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Lock scroll and flag the page as loading (hides reveal targets) while the loader is on screen.
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("loading");
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("loading");
    };
  }, []);

  // As the panel starts sliding away, trigger the content entrance.
  useEffect(() => {
    if (!revealing) return;
    document.documentElement.classList.remove("loading");
    document.documentElement.classList.add("reveal");
  }, [revealing]);

  // Step through greetings, then trigger the reveal.
  useEffect(() => {
    if (revealing) return;
    const isFirst = index === 0;
    const isLast = index === greetings.length - 1;

    if (isLast) {
      const t = setTimeout(() => setRevealing(true), 650);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setIndex((i) => i + 1), isFirst ? 600 : 430);
    return () => clearTimeout(t);
  }, [index, revealing]);

  // Once the panel has slid away, drop it from the DOM and free the page.
  useEffect(() => {
    if (!revealing) return;
    document.body.style.overflow = "";
    const t = setTimeout(() => setHidden(true), 1100);
    return () => clearTimeout(t);
  }, [revealing]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-6 will-change-transform"
      style={{
        transform: revealing ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <span
        key={index}
        className="text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          animation: "greeting-in 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {greetings[index]}
      </span>
    </div>
  );
}
