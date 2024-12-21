import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import { configureStore } from "@reduxjs/toolkit";

import TabCell from "./tab-cell.component";

import multiplicationTabSlice, {
  setInputValue,
} from "../../../../redux/multiplicationTable/multiplicationTabSlice";
import { ReactNode } from "react";
import { Provider } from "react-redux";

let mockRealStore = configureStore({
  reducer: {
    multiplicationTab: multiplicationTabSlice.reducer,
  },
});

const defaultLine = 2;
const defaultCol = 2;
const defaultValue = 4;

const renderWithProvider = (ui: ReactNode) => {
  return render(<Provider store={mockRealStore}>{ui}</Provider>);
};

describe("TabCell component test set", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();

    // reconfigure store after each test
    mockRealStore = configureStore({
      reducer: {
        multiplicationTab: multiplicationTabSlice.reducer,
      },
    });
  });

  it("should render TabCell element without errors", () => {
    const { container } = renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );

    const tabCellComponent = container.querySelector(".component");
    expect(tabCellComponent).toBeInTheDocument();
  });

  it("renders the TabCellInput component", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );

    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("renders the TabCellScore component", () => {
    const { container } = renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );

    const icon = container.querySelector(
      "[data-icon='circle']"
    ) as HTMLImageElement;

    expect(icon).toBeInTheDocument();
  });

  it("renders the TabCellScore component containing correct score", () => {
    const { container } = renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );
    const iconsList = container.querySelectorAll(
      "[data-icon='circle']"
    ) as NodeListOf<HTMLImageElement>;

    expect(iconsList).toHaveLength(defaultLine);
  });

  it("applies the correct class when value is less than 100", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={50} />
    );

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveClass("component__input");
  });

  it("applies the 'component__input--hundreed' class when value is 100 or more", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={150} />
    );

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveClass("component__input--hundreed");
  });

  it("applies the 'component__input--invalid' class when the value is incorrect", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });
    expect(input).toHaveClass("component__input--invalid");
  });

  it("does not apply the 'component__input--invalid' class when the value is correct", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );

    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "4" } });
    expect(input).not.toHaveClass("component__input--invalid");
  });

  it("dispatches setInputValue action on input change", () => {
    const dispatchMock = vi.fn();
    mockRealStore.dispatch = dispatchMock;

    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: "5" } });

    expect(dispatchMock).toHaveBeenCalledWith(
      setInputValue({ row: 0, col: 0, value: "5" })
    );
  });

  it("handles edge case when stateValues are empty", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );

    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });

  it("renders an empty input if stateValues is undefined", () => {
    renderWithProvider(
      <TabCell line={defaultLine} col={defaultCol} value={defaultValue} />
    );
    screen.debug();
    const input = screen.getByRole("spinbutton");

    expect(input).toHaveValue(null);
  });
});
