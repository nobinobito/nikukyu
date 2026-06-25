import type { Preview } from "@storybook/nextjs-vite";
import type { CSSProperties } from "react";
import { createElement } from "react";
import {
  barlowCondensed,
  shirokuma,
} from "../src/app/fonts";
import "../src/app/globals.css";

const storybookFontVars = {
  "--font-body": "var(--font-noto-sans-jp), system-ui, sans-serif",
  "--font-heading-en": "var(--font-barlow-condensed), sans-serif",
  "--font-logo": "var(--font-shirokuma), var(--font-noto-sans-jp), sans-serif",
} as CSSProperties;

const preview: Preview = {
  decorators: [
    (Story) =>
      createElement(
        "div",
        {
          className: `${barlowCondensed.variable} ${shirokuma.variable}`,
          style: storybookFontVars,
        },
        createElement(Story)
      ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

export default preview;
