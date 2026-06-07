import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SalonProductsSection } from "./SalonProductsSection";

const meta = {
  title: "Features/Home/Sections/SalonProductsSection",
  component: SalonProductsSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof SalonProductsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
