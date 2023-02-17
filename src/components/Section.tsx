import React, { useEffect, useRef, useState } from "react";
import { SectionContext } from "../context";
import { useSectionController } from "../hooks/useSectionController";
import { SectionProps } from "../types";

export const Section = ({ children, index }: SectionProps) => {
  const { threshold, containerRef } = useSectionController();
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    /**
     *
     * @returns
     */
    const isVisible = (): boolean => {
      if (!ref.current) return false;
      const { top, height } = ref.current.getBoundingClientRect();
      const consideredHeight = containerRef?.current
        ? containerRef?.current.offsetHeight
        : window.innerHeight;
      if (
        top + height * threshold < consideredHeight &&
        top + height * threshold > 0
      )
        return true;
      if (top < 0) {
        return (height + top) / consideredHeight > threshold;
      }
      const visibleHeight = (consideredHeight - top) / consideredHeight;
      return visibleHeight >= threshold;
    };
    const handleScroll = () => {
      setIsVisible(isVisible());
    };
    handleScroll();
    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);
  return (
    <SectionContext.Provider value={{ isVisible, index: index as number }}>
      <div ref={ref}>{children}</div>
    </SectionContext.Provider>
  );
};
