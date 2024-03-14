import type { Meta, StoryObj } from "@storybook/react";

import { Counter } from "./Counter";

const meta = {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    initialValue: Number,
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    initialValue: 1,
  },
};
