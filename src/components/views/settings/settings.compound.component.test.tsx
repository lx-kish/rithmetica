import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { ActionCreatorWithPayload, configureStore } from "@reduxjs/toolkit";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, vi, expect } from "vitest";

import Settings from "./settings.compound.component";

import { useAppDispatch } from "../../../redux/hooks";
import problemsReducer from "../../../redux/problems/problemsSlice";
import { IProblemType, ISettings } from "../../../TS/interfaces/interfaces";
import { TRoutes, TUIType } from "../../../TS/types/types";

const mockSections = vi.hoisted(() => {
  return {
    Section1: "Section 1",
    Section2: "Section 2",
    Section3: "Section 3",
  };
});

const mockOperations = vi.hoisted(() => {
  return {
    Addition: "Add",
    Subtraction: "Subtract",
    Multiplication: "Multiply",
    Division: "Divide",
    "½": "Half",
    "%": "Percent",
  };
});

const mockArithmeticMissing = vi.hoisted(() => {
  return { operand: "operand", result: "result" };
});

const mockRoutes = vi.hoisted(() => {
  return { arithmetic: "arithmetic", fractions: "fractions" };
});

const mockUiType = vi.hoisted(() => {
  return {
    arithmetic: "arithmetic",
    fractions: "fractions",
    decimals: "decimals",
  };
});

vi.mock("../../../TS/constants/constants", async () => ({
  sections: mockSections,
  operations: mockOperations,
  arithmeticMissing: mockArithmeticMissing,
  routes: mockRoutes,
  uiType: mockUiType,
}));

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

const RenderWithRowContext = ({
  id,
  settings,
  typesFilter,
  children,
}: {
  id: string;
  settings: ISettings;
  typesFilter: (type: IProblemType) => boolean;
  children?: ReactElement | ReactElement[] | null | undefined;
}) => {
  return (
    <Settings.Row id={id} settings={settings} typesFilter={typesFilter}>
      {children}
    </Settings.Row>
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

  describe("Group component test suit", () => {
    const mockRender = vi.fn((settings: ISettings, index: number) => (
      <div key={settings.id} data-testid={`setting-${index}`}>
        {settings.name}: {settings.quantity}
      </div>
    ));

    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    it("renders without crashing", () => {
      const { container } = renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Group>{mockRender}</Settings.Group>
        </RenderWithSettingsContext>
      );

      expect(
        container.querySelector(".settings__settings-group")
      ).toBeInTheDocument();
    });

    it("renders the correct number of items", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Group>{mockRender}</Settings.Group>
        </RenderWithSettingsContext>
      );

      const items = screen.getAllByTestId(/setting-/);
      expect(items).toHaveLength(mockSettingsState.length);
    });

    it("calls the render function for each item in data", () => {
      const mockRender = vi.fn((settings: ISettings, index: number) => (
        <div key={settings.id} data-testid={`setting-${index}`}>
          {settings.name}: {settings.quantity}
        </div>
      ));

      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Group>{mockRender}</Settings.Group>
        </RenderWithSettingsContext>
      );

      expect(mockRender).toHaveBeenCalledTimes(mockSettingsState.length);
    });

    it("renders children with correct text content", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Group>{mockRender}</Settings.Group>
        </RenderWithSettingsContext>
      );

      const firstItem = screen.getByText("Type 1: 10");
      const secondItem = screen.getByText("Type 2: 20");

      expect(firstItem).toBeInTheDocument();
      expect(secondItem).toBeInTheDocument();
    });

    it("renders an empty group if data is an empty array", () => {
      const { container } = renderWithProvider(
        <Settings
          route="testRoute"
          types={mockTypes}
          generateProblems={mockGenerateProblem}
          insertSetting={mockInsertSetting}
          deleteSetting={mockDeleteSetting}
          changeSetting={mockChangeSetting}
          settingsState={[]}
        >
          <Settings.Group>{mockRender}</Settings.Group>
        </Settings>
      );

      const groupElement = container.querySelector(".settings__settings-group");
      expect(groupElement?.children.length).toBe(0);
    });

    it("does not crash when data is null or undefined", () => {
      const { container } = renderWithProvider(
        <RenderWithSettingsContext>
          <Settings.Group>{mockRender}</Settings.Group>
        </RenderWithSettingsContext>
      );

      const groupElement = container.querySelector(".settings__settings-group");
      expect(groupElement).toBeInTheDocument();
    });

    it("handles null or undefined render function gracefully", () => {
      const { container } = renderWithProvider(
        <Settings
          route="testRoute"
          types={mockTypes}
          generateProblems={mockGenerateProblem}
          insertSetting={mockInsertSetting}
          deleteSetting={mockDeleteSetting}
          changeSetting={mockChangeSetting}
          settingsState={[]}
        >
          <Settings.Group>{mockRender}</Settings.Group>
        </Settings>
      );

      const groupElement = container.querySelector(".settings__settings-group");
      expect(groupElement?.children.length).toBe(0);
    });
  });

  describe("Row component test suit", () => {
    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    const mockSettings = mockSettingsState[0];

    const mockTypesFilter = vi.fn(
      (type: IProblemType) => type.section === "Math"
    );

    it("renders without crashing", () => {
      render(
        <Settings.Row
          id="row1"
          settings={mockSettings}
          typesFilter={mockTypesFilter}
        >
          <div>Test Child</div>
        </Settings.Row>
      );

      expect(screen.getByText("Test Child")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
      render(
        <Settings.Row
          id="row1"
          settings={mockSettings}
          typesFilter={mockTypesFilter}
        >
          <div>Test Child</div>
        </Settings.Row>
      );
      const childElement = screen.getByText("Test Child");
      expect(childElement).toBeInTheDocument();
    });

    it("applies the correct class name to the row element", () => {
      render(
        <Settings.Row
          id="row1"
          settings={mockSettings}
          typesFilter={mockTypesFilter}
        >
          <div>Test Child</div>
        </Settings.Row>
      );
      const rowElement = screen.getByText("Test Child");
      expect(rowElement.parentElement).toHaveClass("settings__row");
    });

    it("renders multiple children correctly", () => {
      render(
        <Settings.Row
          id="row1"
          settings={mockSettings}
          typesFilter={mockTypesFilter}
        >
          <div>Test Child</div>
          <div>Test Child</div>
        </Settings.Row>
      );

      const childElements = screen.getAllByText("Test Child");
      expect(childElements).toHaveLength(2);
    });

    it("handles empty children gracefully", () => {
      const { container } = render(
        <Settings.Row
          id="row1"
          settings={mockSettings}
          typesFilter={mockTypesFilter}
        />
      );
      const rowElement = container.querySelector(".settings__row");
      expect(rowElement).not.toBeInTheDocument();
    });

    it("renders unique id for each Row component", () => {
      render(
        <>
          <Settings.Row
            id="row1"
            settings={mockSettings}
            typesFilter={mockTypesFilter}
          >
            <div>Row 1 Child</div>
          </Settings.Row>
          <Settings.Row
            id="row2"
            settings={mockSettings}
            typesFilter={mockTypesFilter}
          >
            <div>Row 2 Child</div>
          </Settings.Row>
        </>
      );
      const firstRowChild = screen.getByText("Row 1 Child");
      const secondRowChild = screen.getByText("Row 2 Child");
      expect(firstRowChild).not.toEqual(secondRowChild);
    });

    it("does not crash when settings or typesFilter are missing", () => {
      render(
        <Settings.Row
          id="row1"
          settings={null as any}
          typesFilter={null as any}
        >
          <div>Test Child</div>
        </Settings.Row>
      );
      const rowElement = screen.getByText("Test Child");
      expect(rowElement).toBeInTheDocument();
    });

    it("handles null or undefined children gracefully", () => {
      render(
        <Settings.Row
          id="row1"
          settings={mockSettings}
          typesFilter={mockTypesFilter}
        >
          {null}
        </Settings.Row>
      );
      const rowElement = screen.getByRole("generic", { hidden: true });
      expect(rowElement.children).toHaveLength(0);
    });
  });

  describe("Container component test suit", () => {
    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    it("renders without crashing", () => {
      render(
        <Settings.Container className="test-class">
          <div>Test Content</div>
        </Settings.Container>
      );

      const childElement = screen.getByText("Test Content");
      expect(childElement.parentElement).toBeInTheDocument();
    });

    it("applies the given className", () => {
      render(
        <Settings.Container className="test-class">
          <div>Test Content</div>
        </Settings.Container>
      );

      const childElement = screen.getByText("Test Content");
      expect(childElement.parentElement).toHaveClass("test-class");
    });

    it("renders the correct children", () => {
      render(
        <Settings.Container className="test-class">
          <div>Test Content</div>
        </Settings.Container>
      );

      const childElement = screen.getByText("Test Content");
      expect(childElement).toBeInTheDocument();
    });

    it("renders multiple children correctly", () => {
      render(
        <Settings.Container className="test-class">
          <div>Test Child 1</div>
          <div>Test Child 2</div>
        </Settings.Container>
      );

      const childElements = screen.getAllByText("Test Child", { exact: false });
      expect(childElements).toHaveLength(2); // The container + 2 children
    });

    it("handles no children gracefully", () => {
      const { container } = render(
        <Settings.Container className="test-class" />
      );

      const containerElement = container.querySelector(".test-class");
      expect(containerElement?.children).toHaveLength(0);
    });

    it("allows className to be empty", () => {
      render(
        <Settings.Container className="">
          <div>Test Content</div>
        </Settings.Container>
      );

      const childElement = screen.getByText("Test Content");
      expect(childElement.parentElement?.className).toMatch(/^$/);
    });

    it("does not crash when children is null", () => {
      const { container } = render(
        <Settings.Container className="test-class">{null}</Settings.Container>
      );

      const containerElement = container.querySelector(".test-class");
      expect(containerElement?.children).toHaveLength(0);
    });

    it("supports nested containers", () => {
      render(
        <Settings.Container className="outer-class">
          <Settings.Container className="inner-class">
            <div>Test Content</div>
          </Settings.Container>
        </Settings.Container>
      );

      const innerContainer = screen.getByText("Test Content");
      expect(innerContainer.parentElement).toHaveClass("inner-class");
      expect(innerContainer.parentElement?.parentElement).toHaveClass(
        "outer-class"
      );
    });

    it("renders React fragments as children correctly", () => {
      render(
        <Settings.Container className="test-class">
          <>
            <div>Fragment Child 1</div>
            <div>Fragment Child 2</div>
          </>
        </Settings.Container>
      );

      const fragmentChildren = screen.getAllByText("Fragment Child", {
        exact: false,
      });
      expect(fragmentChildren).toHaveLength(2);
    });

    it("handles undefined className gracefully", () => {
      render(
        <Settings.Container className={undefined as any}>
          <div>Test Content</div>
        </Settings.Container>
      );

      const containerElement = screen.getByText("Test Content");
      expect(containerElement.parentElement).not.toHaveAttribute("class");
    });
  });

  describe("Sections component test suit", () => {
    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    it("renders all sections as radio inputs", () => {
      render(<Settings.Sections />);

      const radioInputs = screen.getAllByRole("radio");
      expect(radioInputs).toHaveLength(Object.keys(mockSections).length);
    });

    it("renders the correct labels for sections", () => {
      render(<Settings.Sections />);

      const label = screen.getByLabelText("Section 1");
      expect(label).toBeInTheDocument();
    });

    it("selects the correct radio input based on context settings", () => {
      mockSettingsState[1].section = mockSections.Section2;
      render(
        <RenderWithSettingsContext>
          <RenderWithRowContext
            id={"2"}
            settings={mockSettingsState[1]}
            typesFilter={vi.fn()}
          >
            <Settings.Sections />
          </RenderWithRowContext>
        </RenderWithSettingsContext>
      );

      const selectedInput = screen.getByDisplayValue(mockSections.Section2);
      expect(selectedInput).toBeChecked();
      mockSettingsState[1].section = ""; // clean up
    });

    it("calls handleChangeSetting when a radio input is changed", () => {
      mockSettingsState[1].section = mockSections.Section1;
      render(
        <RenderWithSettingsContext>
          <RenderWithRowContext
            id={"2"}
            settings={mockSettingsState[1]}
            typesFilter={vi.fn()}
          >
            <Settings.Sections />
          </RenderWithRowContext>
        </RenderWithSettingsContext>
      );

      const radioInput = screen.getByDisplayValue("Section 2");
      fireEvent.click(radioInput);
      expect(mockChangeSetting).toHaveBeenCalledWith({
        id: "2",
        name: "section",
        value: mockSections.Section2,
      });
      mockSettingsState[1].section = ""; // clean up
    });

    it("displays tooltips on labels correctly", () => {
      render(<Settings.Sections />);
      const label = screen.getByTitle("Section1");
      expect(label).toHaveAttribute("title", "Section1");
    });
  });

  describe("Operations component test suit", () => {
    afterEach(() => {
      vi.clearAllMocks();
      cleanup();
    });

    it("renders all operation options", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <RenderWithRowContext
            id={"2"}
            settings={mockSettingsState[1]}
            typesFilter={vi.fn()}
          >
            <Settings.Operations />
          </RenderWithRowContext>
        </RenderWithSettingsContext>
      );

      expect(screen.getByTitle("Addition")).toBeInTheDocument();
      expect(screen.getByTitle("Subtraction")).toBeInTheDocument();
      expect(screen.getByTitle("Multiplication")).toBeInTheDocument();
      expect(screen.getByTitle("Division")).toBeInTheDocument();
      expect(screen.getByTitle("½")).toBeInTheDocument();
      expect(screen.getByTitle("%")).toBeInTheDocument();
    });

    it("renders all operation radio inputs", () => {
      renderWithProvider(
        <RenderWithSettingsContext>
          <RenderWithRowContext
            id={"2"}
            settings={mockSettingsState[1]}
            typesFilter={vi.fn()}
          >
            <Settings.Operations />
          </RenderWithRowContext>
        </RenderWithSettingsContext>
      );

      const radioInputs = screen.getAllByRole("radio");
      expect(radioInputs).toHaveLength(Object.keys(mockOperations).length);
    });

    it("renders the correct labels for operations", () => {
      render(<Settings.Operations />);

      const label = screen.getByLabelText("Add");
      expect(label).toBeInTheDocument();
    });

    it("selects the correct radio input based on context settings", () => {
      mockSettingsState[1].operation = mockOperations.Addition;
      renderWithProvider(
        <RenderWithSettingsContext>
          <RenderWithRowContext
            id={"2"}
            settings={mockSettingsState[1]}
            typesFilter={vi.fn()}
          >
            <Settings.Operations />
          </RenderWithRowContext>
        </RenderWithSettingsContext>
      );
      const selectedInput = screen.getByDisplayValue("Add");
      expect(selectedInput).toBeChecked();
      mockSettingsState[1].operation = ""; // clean up
    });

    it("calls handleChangeSetting when a radio input is changed", () => {
      mockSettingsState[1].operation = mockOperations.Addition;
      renderWithProvider(
        <RenderWithSettingsContext>
          <RenderWithRowContext
            id={"2"}
            settings={mockSettingsState[1]}
            typesFilter={vi.fn()}
          >
            <Settings.Operations />
          </RenderWithRowContext>
        </RenderWithSettingsContext>
      );

      const radioInput = screen.getByDisplayValue("Subtract");
      fireEvent.click(radioInput);
      expect(mockChangeSetting).toHaveBeenCalledWith({
        id: "2",
        name: "operation",
        value: mockOperations.Subtraction,
      });
      mockSettingsState[1].operation = ""; // clean up
    });

    it("displays tooltips on labels correctly", () => {
      render(<Settings.Operations />);
      const label = screen.getByTitle("Addition");
      expect(label).toHaveAttribute("title", "Addition");
    });
  });
});
