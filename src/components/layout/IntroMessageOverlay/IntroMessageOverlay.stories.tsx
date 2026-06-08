import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { IntroMessageOverlay } from "./IntroMessageOverlay";

const meta = {
  title: "Components/Layout/IntroMessageOverlay",
  component: IntroMessageOverlay,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} satisfies Meta<typeof IntroMessageOverlay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
