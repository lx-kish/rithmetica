import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import TabCellScore from "./tab-cell-score.component";
import TabCellScoreRow from "../tab-cell-score-row/tab-cell-score-row.component";

vi.mock("../tab-cell-score-row/tab-cell-score-row.component", () => ({
  default: vi.fn(() => <div data-testid="tab-cell-score-row" />),
}));

const renderComponent = (tabLine: number) =>
  render(<TabCellScore tabLine={tabLine} />);

describe("TabCellScore component test set", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders the component without crashing", () => {
    renderComponent(1);
    expect(screen.getByTestId("tab-cell-score-row")).toBeInTheDocument();
  });

  it("renders one TabCellScoreRow when line is less than or equal to 2", () => {
    renderComponent(2);
    expect(screen.getAllByTestId("tab-cell-score-row")).toHaveLength(1);
  });

  it("renders two TabCellScoreRow components when line is greater than 2", () => {
    renderComponent(5);
    expect(screen.getAllByTestId("tab-cell-score-row")).toHaveLength(2);
  });

  it("calculates the correct number of dots on the top line for even numbers", () => {
    renderComponent(4);
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 2 }),
      {}
    );
  });

  it("calculates the correct number of dots on the top line for odd numbers", () => {
    renderComponent(5);
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 3 }),
      {}
    );
  });

  it("correctly shifts dots on the second line if the line number is odd", () => {
    renderComponent(5);

    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsExcluded: 3 }),
      {}
    );
  });

  it("does not render the second TabCellScoreRow if the line number is 2 or less", () => {
    renderComponent(2);
    expect(screen.queryAllByTestId("tab-cell-score-row")).toHaveLength(1);
  });

  it("renders both rows with the correct dot amounts when line is even", () => {
    renderComponent(6);
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 3 }),
      {}
    );
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 3 }),
      {}
    );
  });

  it("renders both rows with the correct dot amounts when line is odd", () => {
    renderComponent(7);
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 4 }),
      {}
    );
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 3 }),
      {}
    );
  });

  it("correctly handles edge case with line equal to 1", () => {
    renderComponent(1);
    expect(TabCellScoreRow).toHaveBeenCalledWith(
      expect.objectContaining({ dotsAmount: 1 }),
      {}
    );
  });
});
