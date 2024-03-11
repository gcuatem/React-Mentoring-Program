import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { SortControl } from "./SortControl";

describe("SortControl Component Tests", () => {
  test("All the elements are rendered properly", () => {
    let sortByValues = ["ReleaseDate", "Title"];

    render(
      <SortControl
        sortByDefaultValue="Title"
        sortByValues={sortByValues}
        onChanges={() => {}}
      />
    );
    const labelElement = screen.getByText(/sort by/i);
    expect(labelElement).toBeInTheDocument();

    const comboElement = screen.getByRole("combobox");
    expect(comboElement).toBeInTheDocument();
  });
});
