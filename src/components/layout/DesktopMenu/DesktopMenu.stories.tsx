import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { DesktopMenu } from "./DesktopMenu";

const meta = {
  title: "Components/Layout/DesktopMenu",
  component: DesktopMenu,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof DesktopMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
