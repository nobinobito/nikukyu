import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeaturesSection } from "./FeaturesSection";

const meta = {
  title: "Features/Home/Sections/FeaturesSection",
  component: FeaturesSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof FeaturesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
