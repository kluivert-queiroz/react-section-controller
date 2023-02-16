import { useContext } from "react";
import { SectionControllerContext } from "../context";
import { SectionContextType } from "../types";

export const useSectionController = (): SectionContextType => {
  const context = useContext(SectionControllerContext);
  return context as SectionContextType;
};
