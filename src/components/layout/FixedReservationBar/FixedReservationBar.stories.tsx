import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FixedReservationBar } from "./FixedReservationBar";

const meta = {
  title: "Components/Layout/FixedReservationBar",
  component: FixedReservationBar,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof FixedReservationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
