import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SalonInformationSection } from "./SalonInformationSection";

const meta = {
  title: "Features/Home/Sections/SalonInformationSection",
  component: SalonInformationSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof SalonInformationSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
