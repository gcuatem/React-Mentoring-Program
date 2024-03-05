import user from "@testing-library/user-event";
import { render } from "@testing-library/react";
import Search from "./Search";

describe("Search Component Tests", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Test that after typing to the input and click on button onChange prop is called with proper value", async () => {
    const mockOnChange = vi.fn();
    user.setup();

    const { getByPlaceholderText, getByText } = render(
      <Search initialSearchQuery="" onSearch={mockOnChange} />
    );

    // Get the input element and type into it
    const input = getByPlaceholderText("Enter your search query...");
    await user.type(input, "test query");
    const submitButton = getByText("Search");
    await user.click(submitButton);
    expect(mockOnChange).toHaveBeenCalledWith("test query");
  });

  test('Test that after typing to the input and pressing Enter key, the "onChange" prop is called with proper value', async () => {
    const mockOnChange = vi.fn();

    user.setup();
    const { getByPlaceholderText } = render(
      <Search initialSearchQuery="" onSearch={mockOnChange} />
    );

    const input = getByPlaceholderText("Enter your search query...");
    await user.type(input, "test query");
    await user.keyboard("[Enter]");
    expect(mockOnChange).toHaveBeenCalledWith("test query");
  });

  test("renders input with initial value passed in props", () => {
    const initialValue = "initial value";
    const { getByPlaceholderText } = render(
      <Search initialSearchQuery={initialValue} onSearch={() => {}} />
    );
    const input = getByPlaceholderText("Enter your search query...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(initialValue);
  });
});
