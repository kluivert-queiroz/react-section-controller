import React, { Children, useEffect, useRef } from "react";
import { SectionControllerContext } from "../context";
import { Section } from "./Section";

export const SectionController = ({
  children,
  ...otherProps
}: SectionControllerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const childrenWithProps = Children.map(children, (child, index) => {
    if (child.type !== Section)
      throw new Error("Only Section can be child of SectionControler.");
    console.log("##", child);
    return React.cloneElement(child, { index });
  });
  const scrollToIndex = (index: number, args?: ScrollIntoViewOptions) => {
    ref.current?.children[index].scrollIntoView(args ?? { behavior: "smooth" });
  };

  return (
    <SectionControllerContext.Provider value={{ scrollToIndex }}>
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
