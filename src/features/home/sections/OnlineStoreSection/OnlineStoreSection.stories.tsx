import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { OnlineStoreSection } from "./OnlineStoreSection";

const meta = {
  title: "Features/Home/Sections/OnlineStoreSection",
  component: OnlineStoreSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof OnlineStoreSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
