import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect } from "vitest";
import { Counter } from "./Counter";

describe("Counter Component Tests", () => {
  test("renders initial value provided in props", () => {
    const initialValue = 2;
    render(<Counter initialValue={initialValue} />);
    const valueElement = screen.getByText(`Counter: ${initialValue}`);
    expect(valueElement).toBeInTheDocument();
  });

  test("click event on decrement button decrements the displayed value", async () => {
    let initialValue = 1;
    user.setup();
    render(<Counter initialValue={initialValue} />);
    const decrementButton = screen.getByRole("button", { name: "Decrement" });
    await user.click(decrementButton);
    initialValue--;
    const valueElement = screen.getByText(`Counter: ${initialValue}`);
    expect(valueElement).toBeInTheDocument();
    expect(valueElement).toHaveTextContent("Counter: 0");
  });

  test("click event on Increment button increments the displayed value", async () => {
    let initialValue = 0;
    user.setup();
    render(<Counter initialValue={initialValue} />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);
    initialValue++;
    const valueElement = screen.getByText(`Counter: ${initialValue}`);
    expect(valueElement).toBeInTheDocument();
  });
});
