import React from "react";
import { SectionContextType, SectionData } from "./types";

export const SectionControllerContext =
  React.createContext<SectionContextType | null>(null);

export const SectionContext = React.createContext<SectionData | null>(null);
