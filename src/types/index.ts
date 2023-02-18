export declare interface SectionData {
  isVisible: boolean;
  index: number;
}

export declare interface SectionControllerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  threshold?: number;
  containerRef?: React.RefObject<HTMLDivElement> | null;
}

export declare interface SectionProps {
  children: React.ReactNode | ((sectionData: SectionData) => React.ReactNode);
  index?: number;
}

export declare interface SectionContextType {
  scrollToIndex(index: number, args?: ScrollIntoViewOptions): void;
  threshold: number;
  containerRef?: React.RefObject<HTMLDivElement>;
}
