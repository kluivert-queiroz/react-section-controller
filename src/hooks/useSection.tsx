import { useContext } from "react";
import { SectionContext } from "../context";
import { SectionData } from "../types";

export const useSection = (): SectionData => {
  const context = useContext(SectionContext);
  return context as SectionData;
};
