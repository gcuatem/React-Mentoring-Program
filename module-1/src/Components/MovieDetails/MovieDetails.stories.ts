import type { Meta, StoryObj } from "@storybook/react";
import { MovieDetails } from "./MovieDetails";

const meta = {
  title: "Components/MovieDetails",
  component: MovieDetails,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MovieDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    movie: {
      id: 1011985,
      imageUrl:
        "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      movieName: "Kung Fu Panda 4",
      releaseDate: "2024-03-02",
      genres: [
        { id: 28, genreName: "Action" },
        { id: 12, genreName: "Adventure" },
        { id: 16, genreName: "Animation" },
      ],
      rating: 7.3,
      duration: "1h 34min",
      description:
        "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    },
  },
};
