import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HomePage } from "./HomePage";

const meta = {
  title: "Features/Home/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone14",
    },
  },
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};