import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MobileGallerySection } from "./MobileGallerySection";

const meta = {
  title: "Features/Home/Sections/MobileGallerySection",
  component: MobileGallerySection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof MobileGallerySection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
