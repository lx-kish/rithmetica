import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { settings } from "../../../../redux/problems/problemsSlice";
import ArithmeticHeaderContent from "./arithmetic.header.content";

import problemsReducer from "../../../../redux/problems/problemsSlice";
import { TRoutes, TUIType } from "../../../../TS/types/types";
import { ISettings } from "../../../../TS/interfaces/interfaces";

const mockRealStore = configureStore({
  reducer: {
    problems: problemsReducer.reducer,
  },
});

const mockSettingsState: ISettings[] = vi.hoisted(() => {
  return [
    {
      id: "1",
      page: "" as TRoutes,
      section: "",
      name: "Type 1",
      operation: "",
      numberOfOperands: NaN,
      missing: undefined,
      quantity: 10,
    },
    {
      id: "2",
      page: "" as TRoutes,
      section: "",
      name: "Type 2",
      operation: "",
      numberOfOperands: NaN,
      missing: undefined,
      quantity: 20,
    },
    {
      id: "3",
      page: "" as TRoutes,
      section: "",
      name: "Type 3",
      operation: "",
      numberOfOperands: NaN,
      missing: undefined,
      quantity: 30,
    },
  ];
});

const mockProblemTypes = vi.hoisted(() => {
  return [
    {
      page: "",
      operation: "",
      name: "Type 1",
      colPerRow: NaN,
      missing: "",
      uiType: "" as TUIType,
      factory: vi.fn(),
      processor: vi.fn(),
    },
    {
      page: "",
      operation: "",
      name: "Type 2",
      colPerRow: NaN,
      missing: "",
      uiType: "" as TUIType,
      factory: vi.fn(),
      processor: vi.fn(),
    },
    {
      page: "",
      operation: "",
      name: "Type 3",
      colPerRow: NaN,
      missing: "",
      uiType: "" as TUIType,
      factory: vi.fn(),
      processor: vi.fn(),
    },
  ];
});

vi.mock("../../../../redux/hooks", () => ({
  useAppSelector: vi.fn((selector) => {
    if (selector === settings) return mockSettingsState;
    return [];
  }),
  useAppDispatch: vi.fn(() => vi.fn()),
}));

vi.mock("../../../math/problem-types", async (importOriginal) => {
  const actual: {} = await importOriginal();
  return {
    ...actual,
    mockProblemTypes,
  };
});

const renderComponent = (pageName: string) => {
  const store = mockRealStore;
  return render(
    <Provider store={store}>
      <ArithmeticHeaderContent pageName={pageName} />
    </Provider>
  );
};

describe("ArithmeticHeaderContent Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders the component with the correct page name", () => {
    renderComponent("addition");
    const aboutTitle = screen.getByText("About");
    expect(aboutTitle).toBeInTheDocument();
  });

  it("renders the Collapsible component for Math Theory", () => {
    renderComponent("addition");
    const mathTheoryTitle = screen.getByText("Math Theory");
    expect(mathTheoryTitle).toBeInTheDocument();
  });

  it("renders the Collapsible component for How it works", () => {
    renderComponent("addition");
    const howItWorksTitle = screen.getByText("How it works");
    expect(howItWorksTitle).toBeInTheDocument();
  });

  it("renders the correct number of rows based on the settings state", () => {
    mockSettingsState.forEach(
      (setting) => (setting.page = "addition" as TRoutes)
    );

    const { container } = renderComponent("addition");

    const settingRows = container.querySelectorAll(".settings__row");

    expect(settingRows.length).toBe(mockSettingsState.length);

    mockSettingsState.forEach((setting) => (setting.page = "" as TRoutes)); // cleanup
  });

  it("renders the correct operations for each row", () => {
    mockSettingsState.forEach(
      (setting) => (setting.page = "addition" as TRoutes)
    );

    renderComponent("addition");
    const addButtons = screen.getAllByTitle("add line");

    expect(addButtons.length).toBe(mockSettingsState.length);

    mockSettingsState.forEach((setting) => (setting.page = "" as TRoutes)); // cleanup
  });

  it("renders Quantity component with the correct initial value", () => {
    mockSettingsState[0].page = "addition" as TRoutes;

    renderComponent("addition");
    const quantityInputs = screen.getAllByRole("spinbutton");
    expect(quantityInputs[0]).toHaveValue(mockSettingsState[0].quantity);

    // clean up
    mockSettingsState[0].page = "" as TRoutes;
  });
});
