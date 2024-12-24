import { render, cleanup } from "@testing-library/react";
import { describe, it, vi } from "vitest";

import TabCellScoreRow from "./tab-cell-score-row.component";

import Content from "../../../../table.content";

const renderComponent = (dotsAmount: number, shift = 0) =>
  render(<TabCellScoreRow dotsAmount={dotsAmount} dotsExcluded={shift} />);

describe("TabCellScoreRow component test set", () => {
  afterEach(() => {
    vi.clearAllMocks();
    cleanup();
  });

  it("renders without crashing", () => {
    const { container } = renderComponent(1);

    expect(
      container.querySelector("[data-icon='circle']") as HTMLImageElement
    ).toBeInTheDocument();
  });

  it("renders the correct number of IconCircle components for dotsAmount", () => {
    const numIcons = 3;
    const { container } = renderComponent(numIcons);

    expect(
      container.querySelectorAll(
        "[data-icon='circle']"
      ) as NodeListOf<HTMLImageElement>
    ).toHaveLength(numIcons);
  });

  it("applies the correct className based on content.styles for each IconCircle", () => {
    const { container } = renderComponent(2);

    const icons = container.querySelectorAll(
      "[data-icon='circle']"
    ) as NodeListOf<HTMLImageElement>;
    expect(icons[0]).toHaveClass("component__icon");
    expect(icons[1]).toHaveClass("component__icon");
  });

  it("applies the correct css class for icons when rendering with dots excluded", () => {
    const { container } = renderComponent(2, 3); // line containing 2 dots, starting from 4th, should be 4th and 5th

    const icons = container.querySelectorAll(
      "[data-icon='circle']"
    ) as NodeListOf<HTMLImageElement>;

    expect(icons[0]).toHaveClass(Content.styles[4]);
    expect(icons[1]).toHaveClass(Content.styles[5]);
  });

  it("handles dotsAmount of 0 by not rendering any IconCircle components", () => {
    const { container } = renderComponent(0);

    expect(
      container.querySelectorAll(
        "[data-icon='circle']"
      ) as NodeListOf<HTMLImageElement>
    ).toHaveLength(0);
  });

  it("handles negative dotsAmount by not rendering any IconCircle components", () => {
    const { container } = renderComponent(-1);

    expect(
      container.querySelectorAll(
        "[data-icon='circle']"
      ) as NodeListOf<HTMLImageElement>
    ).toHaveLength(0);
  });

  it("handles large dotsAmount values by rendering the correct number of IconCircle components", () => {
    const numIcons = 100;
    const { container } = renderComponent(numIcons);

    expect(
      container.querySelectorAll(
        "[data-icon='circle']"
      ) as NodeListOf<HTMLImageElement>
    ).toHaveLength(numIcons);
  });

  it("handles dotsAmount larger than available content.styles gracefully", () => {
    const { container } = renderComponent(15);

    const icons = container.querySelectorAll(
      "[data-icon='circle']"
    ) as NodeListOf<HTMLImageElement>;
    expect(icons).toHaveLength(15);
  });
});
