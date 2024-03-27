import type { Meta, StoryObj } from "@storybook/react";

import { MovieForm } from "./MovieForm";

const meta = {
  title: "Components/MovieForm",
  component: MovieForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovieForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    action: "ADD",
  },
};
