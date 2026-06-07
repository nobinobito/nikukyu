import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ReservationGuideSection } from "./ReservationGuideSection";

const meta = {
  title: "Features/Home/Sections/ReservationGuideSection",
  component: ReservationGuideSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof ReservationGuideSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
