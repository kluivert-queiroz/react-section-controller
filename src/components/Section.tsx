import React, { useEffect, useRef, useState } from "react";
import { SectionContext } from "../context";
import { useSectionController } from "../hooks/useSectionController";
import { SectionProps } from "../types";

export const Section = ({ children, index }: SectionProps) => {
  const { threshold } = useSectionController();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return false;
      const { top, height } = ref.current.getBoundingClientRect();
      const visibleHeight = top + height * threshold; // at least percent of must be in viewport
      setIsVisible(visibleHeight >= 0 && visibleHeight <= window.innerHeight);
    };
    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);
  return (
    <SectionContext.Provider value={{ isVisible, index: index as number }}>
      <div ref={ref}>{children}</div>
    </SectionContext.Provider>
  );
};
