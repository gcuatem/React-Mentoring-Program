import { MovieTile } from "./MovieTile";

export default {
  title: "Components/MovieTile",
  component: MovieTile,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
};

const Template = (args: any) => <MovieTile {...args} />;

export const Default = Template.bind({});

Default.args = {
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
  },
};
