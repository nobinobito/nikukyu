import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PaymentsSection } from "./PaymentsSection";

const meta = {
  title: "Features/Home/Sections/PaymentsSection",
  component: PaymentsSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof PaymentsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
