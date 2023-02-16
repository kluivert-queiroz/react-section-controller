import React, { Children, useRef } from "react";
import { SectionControllerContext } from "../context";
import { SectionControllerProps } from "../types";
import { Section } from "./Section";

export const SectionController = ({
  children,
  threshold = 0.6,
  ...otherProps
}: SectionControllerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const childrenWithProps = Children.map(children, (child, index) => {
    if (child.type !== Section)
      throw new Error("Only Section can be child of SectionControler.");
    return React.cloneElement(child, { index });
  });
  const scrollToIndex = (index: number, args?: ScrollIntoViewOptions) => {
    ref.current?.children[index].scrollIntoView(args ?? { behavior: "smooth" });
  };

  return (
    <SectionControllerContext.Provider value={{ scrollToIndex, threshold }}>
      <div
        className={`sectionController ${otherProps.className}`}
        ref={ref}
        {...otherProps}
      >
        {childrenWithProps}
      </div>
    </SectionControllerContext.Provider>
  );
};
