import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "./Search";

const meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    initialSearchQuery: "Initial Search",
    onSearch: () => {},
  },
};
