import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SectionController } from "../components/SectionController";
import { Section } from "../components/Section";
import { useSectionController } from "../hooks/useSectionController";
import { useSection } from "../hooks/useSection";
import { useRef } from "react";
export default {
  title: "SectionController",
  component: SectionController,
} as ComponentMeta<typeof SectionController>;

const Template: ComponentStory<typeof SectionController> = (args) => (
  <SectionController {...args} />
);

export const ProgrammaticScroll = Template.bind({});
const ScrollToSectionButton = ({ linkedTo }) => {
  const ctx = useSectionController();
  const handleClick = () => {
    ctx.scrollToIndex(linkedTo, {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return <button onClick={handleClick}>Go to Section #{linkedTo + 1}!</button>;
};
ProgrammaticScroll.args = {
  children: [
    <Section>
      <ScrollToSectionButton linkedTo={1} />
    </Section>,
    <Section>
      <ScrollToSectionButton linkedTo={2} />
    </Section>,
    <Section>
      <ScrollToSectionButton linkedTo={0} />
    </Section>,
  ],
  style: { display: "flex", flexDirection: "column", gap: "100vh" },
};

export const LongSections = Template.bind({});
const SizedColoredSection = ({ height = "100vh" }) => {
  const { index, isVisible } = useSection();
  return (
    <div
      style={{
        height,
        backgroundColor: index % 2 === 0 ? "red" : "green",
      }}
    >
      <p>Long Section: {isVisible ? "active" : "inactive"}</p>
    </div>
  );
};
LongSections.args = {
  children: [
    <Section>
      <SizedColoredSection />
    </Section>,
    <Section>
      <SizedColoredSection />
    </Section>,
    <Section>
      <SizedColoredSection />
    </Section>,
  ],
  style: { display: "flex", flexDirection: "column" },
};

export const SmallSections = Template.bind({});
SmallSections.args = {
  children: [
    <Section>
      <SizedColoredSection height="30vh" />
    </Section>,
    <Section>
      <SizedColoredSection height="30vh" />
    </Section>,
    <Section>
      <SizedColoredSection height="30vh" />
    </Section>,
  ],
  style: { display: "flex", flexDirection: "column" },
};

const ContaineredTemplate: ComponentStory<typeof SectionController> = (
  args
) => {
  const ref = useRef(null);
  return (
    <div style={{ height: "50vh", overflow: "scroll" }} ref={ref}>
      <SectionController {...args} containerRef={ref} />
    </div>
  );
};
export const LongContaineredSections = ContaineredTemplate.bind({});
LongContaineredSections.args = {
  children: [
    <Section>
      <SizedColoredSection />
    </Section>,
    <Section>
      <SizedColoredSection />
    </Section>,
    <Section>
      <SizedColoredSection />
    </Section>,
  ],
  style: { display: "flex", flexDirection: "column" },
};
