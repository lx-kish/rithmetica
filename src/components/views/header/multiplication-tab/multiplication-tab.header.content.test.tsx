import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi } from "vitest";
import { Provider } from "react-redux";
import { ActionCreatorWithPayload, configureStore } from "@reduxjs/toolkit";

import MultiplicationTabHeaderContent from "./multiplication-tab.header.content";

import multiplicationTabSlice from "../../../../redux/multiplicationTable/multiplicationTabSlice";

const mockRealStore = configureStore({
  reducer: {
    multiplicationTab: multiplicationTabSlice.reducer,
  },
});

const mockDispatch = vi.fn();

vi.mock("../../../../redux/hooks", () => ({
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn((fn: any) => mockDispatch),
}));

const clearAllInputs =
  vi.fn() as unknown as ActionCreatorWithPayload<"multiplicationTabSlice/clearAllInputs">;
const switchSubtract = vi.fn();

const renderComponent = () => {
  return render(
    <Provider store={mockRealStore}>
      <MultiplicationTabHeaderContent />
    </Provider>
  );
};

describe("Multiplication Table Header Content test suit", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders the 'How it works' CollapsibleSticky component", () => {
    renderComponent();
    const title = screen.getByText("How it works");
    expect(title).toBeInTheDocument();
  });

  it("renders the Toggler component with the correct labels", () => {
    renderComponent();
    const additionLabel = screen.getByText("addition");
    const subtractionLabel = screen.getByText("subtraction");
    expect(additionLabel).toBeInTheDocument();
    expect(subtractionLabel).toBeInTheDocument();
  });

  it("renders the Toggler unchecked by default", () => {
    renderComponent();
    const togglerInput = screen.getByRole("checkbox");
    expect(togglerInput).not.toBeChecked();
  });

  it("sets the Toggler to checked on click", async () => {
    renderComponent();
    const togglerInput = screen.getByRole("checkbox");
    await userEvent.click(togglerInput);
    expect(togglerInput).toBeChecked();
  });

  it("renders the sticky element with the correct border", () => {
    const { container } = renderComponent();
    expect(
      container.querySelector(".collapsible__border-bottom")
    ).toBeInTheDocument();
  });

  it("renders the paragraph inside the HowMultitabWorks component", () => {
    renderComponent();
    const paragraph = screen.getByText(
      /This part of the application helps kids to discover the meaning of the term "multiplication"/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("ensures the toggler content structure is applied correctly", () => {
    renderComponent();
    const togglerBox = screen.getByRole("checkbox");
    expect(togglerBox).toHaveClass("toggler__input");
  });
});
