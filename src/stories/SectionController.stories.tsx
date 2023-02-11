import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SectionController } from "../components/SectionController";
import { Section } from "../components/Section";
import { useSectionController } from "../hooks/useSectionController";
import { useSection } from "../hooks/useSection";
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
