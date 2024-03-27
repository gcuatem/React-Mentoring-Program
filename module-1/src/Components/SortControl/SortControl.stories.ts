import type { Meta, StoryObj } from "@storybook/react";
import { SortControl } from "./SortControl";

const meta = {
  title: "Components/SortControl",
  component: SortControl,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
    argTypes: {
      onChanges: { control: "" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SortControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    sortByValues: [
      { id: 1, field: "ReleaseDate" },
      { id: 2, field: "Title" },
    ],
    sortByDefaultValue: "Title",
    onChanges: () => {},
  },
};
