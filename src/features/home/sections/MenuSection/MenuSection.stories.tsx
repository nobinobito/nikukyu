import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { MenuSection } from "./MenuSection";

const meta = {
  title: "Features/Home/Sections/MenuSection",
  component: MenuSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof MenuSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
