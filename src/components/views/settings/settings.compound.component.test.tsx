import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { ActionCreatorWithPayload, configureStore } from "@reduxjs/toolkit";

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi, expect } from "vitest";

import Settings from "./settings.compound.component";

import { useAppDispatch } from "../../../redux/hooks";
import problemsReducer from "../../../redux/problems/problemsSlice";
import { ISettings } from "../../../TS/interfaces/interfaces";
import { TRoutes, TUIType } from "../../../TS/types/types";

const mockTypes = [
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

const mockSettingsState: ISettings[] = [
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

vi.mock("../../../redux/hooks", () => ({
  useAppDispatch: vi.fn(() => vi.fn()),
}));

const mockGenerateProblem = vi.fn() as unknown as ActionCreatorWithPayload<
  { route: string },
  "problems/generateProblems"
>;

const mockInsertSetting = vi.fn() as unknown as ActionCreatorWithPayload<
  { id: string; route: string },
  "problems/insertSetting"
>;

const mockDeleteSetting = vi.fn() as unknown as ActionCreatorWithPayload<
  { id: string; route: string },
  "problems/deleteSetting"
>;

const mockChangeSetting = vi.fn() as unknown as ActionCreatorWithPayload<
  { id: string; name: string; value: string | number },
  "problems/changeSetting"
>;

const mockReduxStore = configureStore({
  reducer: {
    problems: problemsReducer.reducer,
  },
});

const renderWithProvider = (ui: ReactNode) => {
  return render(<Provider store={mockReduxStore}>{ui}</Provider>);
};

const RenderWithSettingsContext = ({
  children,
}: {
  children?: ReactElement | null | undefined;
}) => {
  return (
    <Settings
      route="testRoute"
      types={mockTypes}
      generateProblems={mockGenerateProblem}
      insertSetting={mockInsertSetting}
      deleteSetting={mockDeleteSetting}
      changeSetting={mockChangeSetting}
      settingsState={mockSettingsState}
    >
      {children}
    </Settings>
  );
};

describe("Settings compound component test suit", () => {
  describe("Global Settings component test suit", () => {
    it("renders the Settings component with default props", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <div>test children content</div>
        </RenderWithSettingsContext>
      );

      expect(screen.getByText("test children content")).toBeInTheDocument();
    });
  });

  describe("Body component test suit", () => {
    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    it("renders the Settings.Body compound component with default props", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );
      expect(screen.getByText("test children content")).toBeInTheDocument();
    });

    it("should render the Collapsible component with the correct title", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );

      expect(screen.getByRole("heading")).toHaveTextContent("Settings");
    });

    it("should render the children inside the Collapsible component", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );
      expect(screen.getByText("test children content")).toBeInTheDocument();
    });

    it("should render the Generate button", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );
      expect(
        screen.getByRole("button", { name: "Generate" })
      ).toBeInTheDocument();
    });

    it("should render the expand/collapse button", () => {
      const { container } = renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );

      expect(container.querySelector(".collapsible__btn")).toBeInTheDocument();
    });

    it("should apply the correct classes to the root element", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );
      expect(screen.getByText("Generate").closest("div")).toHaveClass(
        "settings"
      );
    });

    it("should call handleGenerate when the Generate button is clicked", async () => {
      const mockDispatch = vi.fn();
      vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);

      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );
      const button = screen.getByText("Generate");
      await userEvent.click(button);
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });

    it("should not call handleGenerate if button is not clicked", () => {
      const mockDispatch = vi.fn();
      vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);

      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Body>
            <div>test children content</div>
          </Settings.Body>
        </RenderWithSettingsContext>
      );
      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
