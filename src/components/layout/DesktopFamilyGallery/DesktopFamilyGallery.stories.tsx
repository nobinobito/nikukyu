import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DesktopFamilyGallery } from "./DesktopFamilyGallery";

const meta = {
  title: "Components/Layout/DesktopFamilyGallery",
  component: DesktopFamilyGallery,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof DesktopFamilyGallery>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
