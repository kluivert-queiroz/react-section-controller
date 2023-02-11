import { useContext } from "react";
import { SectionControllerContext } from "../context";

export const useSectionController = (): SectionContextType => {
  const context = useContext(SectionControllerContext);
  return context as SectionContextType;
};
