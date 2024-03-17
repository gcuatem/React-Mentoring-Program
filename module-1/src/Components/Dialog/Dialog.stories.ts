import type { Meta, StoryObj } from "@storybook/react";

import { Dialog } from "./Dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    dialogTitle: "Dialog Title",
    children: "",
  },
};
