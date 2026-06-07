import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AboutSection } from "./AboutSection";

const meta = {
  title: "Features/Home/Sections/AboutSection",
  component: AboutSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof AboutSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
