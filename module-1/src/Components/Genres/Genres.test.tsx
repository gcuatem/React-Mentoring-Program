import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Genres from "./Genres";

describe("Genre Component tests", () => {
  
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("component renders all genres passed in props", async () => {
    let listOfGenres = ["Drama", "Horror", "Comedy", "Suspense", "Action"];
    const mockOnChange = vi.fn();

    render(
      <Genres
        genres={listOfGenres}
        selected={listOfGenres[1]}
        onSelect={mockOnChange}
      />
    );

    const buttonsDisplayed = await screen.findAllByRole("button");
    expect(buttonsDisplayed).toHaveLength(listOfGenres.length);
  });

  test("after a click on a genre component calls callback with correct argument", async () => {
    let listOfGenres = ["Drama", "Horror", "Comedy", "Suspense", "Action"];
    const mockOnChange = vi.fn();
    user.setup();

    render(
      <Genres
        genres={listOfGenres}
        selected={listOfGenres[1]}
        onSelect={mockOnChange}
      />
    );
    const clickedButton = screen.getByRole("button", {
      name: /drama/i,
    });
    await user.click(clickedButton);
    expect(mockOnChange).toHaveBeenCalledWith("Drama");
  });

  test("component highlights a selected genre passed in props", () => {
    let listOfGenres = ["Drama", "Horror", "Comedy", "Suspense", "Action"];
    const mockOnChange = vi.fn();

    render(
      <Genres
        genres={listOfGenres}
        selected={listOfGenres[1]}
        onSelect={mockOnChange}
      />
    );
    const selectedButton = screen.getByRole("button", {
      name: /horror/i,
    });
    
    expect(selectedButton).toHaveClass("text-red-500", "border-green-600");
  });

});
