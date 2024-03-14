import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { MovieDetails } from "./MovieDetails";

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
      rating: 7.3,
      duration: "1h 34min",
      description:
        "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    };

    render(<MovieDetails movie={movie} />);
    //   render(<MovieTile movie={movie} />);
    const imageElement = screen.getByTestId("details-img");
    expect(imageElement).toBeInTheDocument();

    const titleElement = screen.getByTestId("details-title");
    expect(titleElement).toBeInTheDocument();

    const yearElement = screen.getByTestId("details-year");
    expect(yearElement).toBeInTheDocument();

    const genresElement = screen.getByTestId("details-genres");
    expect(genresElement).toBeInTheDocument();

    const ratingElement = screen.getByTestId("details-rating");
    expect(ratingElement).toBeInTheDocument();

    const durationElement = screen.getByTestId("details-duration");
    expect(durationElement).toBeInTheDocument();

    const descriptionElement = screen.getByTestId("details-description");
    expect(descriptionElement).toBeInTheDocument();
  });
});
