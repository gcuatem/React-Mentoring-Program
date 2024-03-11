import type { Meta, StoryObj } from "@storybook/react";

import { Genres } from "./Genres";

const meta = {
  title: "Components/Genres",
  component: Genres,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    genres: { control: "" },
  },
} satisfies Meta<typeof Genres>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    genres: ["Drama", "Horror", "Comedy", "Suspense", "Action"],
    selected: "Drama",
    onSelect: () => {},
  },
};
