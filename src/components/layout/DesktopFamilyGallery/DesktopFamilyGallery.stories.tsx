import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DesktopFamilyGalleryClient } from "./DesktopFamilyGalleryClient";

const meta = {
  title: "Components/Layout/DesktopFamilyGallery",
  component: DesktopFamilyGalleryClient,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof DesktopFamilyGalleryClient>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    photos: [
      { src: "/home/gallery/c1.jpg", alt: "c1" },
      { src: "/home/gallery/c2.jpg", alt: "c2" },
      { src: "/home/gallery/d1.jpg", alt: "d1" },
      { src: "/home/gallery/d2.jpg", alt: "d2" },
      { src: "/home/gallery/c3.jpg", alt: "c3" },
      { src: "/home/gallery/d3.jpg", alt: "d3" },
    ],
  },
};
