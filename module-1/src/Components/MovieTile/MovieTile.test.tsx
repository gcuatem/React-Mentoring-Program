import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { MovieTile } from "./MovieTile";

describe("MovieTile Component Tests", () => {
  test("All the elements are rendered properly", () => {
    let movie: Movie;
    movie = {
      id: 101,
      movieName: "Title",
      releaseDate: "2004-03-12",
      imageUrl:
        "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
      genres: [
        { id: 28, genreName: "Action" },
        { id: 12, genreName: "Adventure" },
        { id: 16, genreName: "Animation" },
      ],
    };
    render(<MovieTile movie={movie} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByText(/title/i);
    expect(titleElement).toBeInTheDocument();

    const yearElement = screen.getByText(/2004/i);
    expect(yearElement).toBeInTheDocument();

    const genresElement = screen.getByText(/animation/i);
    expect(genresElement).toBeInTheDocument();
  });
});
