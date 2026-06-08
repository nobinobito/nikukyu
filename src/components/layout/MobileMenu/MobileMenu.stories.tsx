import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MobileMenu } from "./MobileMenu";

const meta = {
  title: "Components/Layout/MobileMenu",
  component: MobileMenu,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof MobileMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
