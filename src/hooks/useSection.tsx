import { useContext } from "react";
import { SectionContext } from "../context";

export const useSection = (): SectionData => {
  const context = useContext(SectionContext);
  return context as SectionData;
};
