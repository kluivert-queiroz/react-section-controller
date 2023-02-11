import React, { useEffect, useRef, useState } from "react";
import { SectionContext } from "../context";

export const Section = ({ children, index }: SectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return false;
      const top = ref.current.getBoundingClientRect().top;
      setIsVisible(top >= 0 && top <= window.innerHeight);
    };
    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);
  return (
    <SectionContext.Provider value={{ isVisible, index }}>
      <div ref={ref}>{children}</div>
    </SectionContext.Provider>
  );
};
