interface SectionData {
  isVisible: boolean;
  index: number;
}

interface SectionControllerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}

interface SectionProps {
  children: React.ReactNode | ((sectionData: SectionData) => React.ReactNode);
  index: number;
}

interface SectionContextType {
  scrollToIndex(index: number, args?: ScrollIntoViewOptions): void;
}
