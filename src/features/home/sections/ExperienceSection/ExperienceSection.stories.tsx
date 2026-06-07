import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ExperienceSection } from "./ExperienceSection";

const meta = {
  title: "Features/Home/Sections/ExperienceSection",
  component: ExperienceSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof ExperienceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
