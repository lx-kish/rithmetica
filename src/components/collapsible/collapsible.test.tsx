import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Collapsible from "./collapsible.component";

const childrenContent = "Test children content";

describe("Collapsible component test suit", () => {
  afterEach(cleanup);

  it("renders the title correctly", () => {
    render(<Collapsible title="Test Collapsible" />);
    expect(screen.getByText("Test Collapsible")).toBeInTheDocument();
  });

  // render button
  it("renders expand button", () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  // render icom
  it("renders chevron icon within expand button", () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const { container } = render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );
    const icon = container.querySelector("[data-icon='chevron-down']");

    expect(icon).toBeInTheDocument();
  });

  // child (content) has collapsible--collapsed CSS class
  it("renders content block with CSS class 'collapsible--collapsed'", () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const content = screen.queryByText(childrenContent);
    expect(content?.classList.contains("collapsible--collapsed")).toBe(true);
  });

  // no child (content)
  it("renders content block with CSS class 'collapsible--expanded' after pressing button", async () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const button = screen.getByRole("button");
    const content = screen.queryByText(childrenContent);
    // const content = screen.queryByText(/^I'm collapsible$/i);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    fireEvent.click(button);

    expect(content.classList.contains("collapsible--expanded")).toBe(true);
  });

  // no child (content)
  it("renders content block with NO CSS class 'collapsible--collapsed' after pressing button", async () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const button = screen.getByRole("button");
    const content = screen.queryByText(childrenContent);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    fireEvent.click(button);

    expect(content.classList.contains("collapsible--collapsed")).toBe(false);
  });

  // no child (content)
  it("renders content block with CSS class 'collapsible--collapsed' after pressing button 2 times", async () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const button = screen.getByRole("button");
    const content = screen.queryByText(childrenContent);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    fireEvent.click(button);

    fireEvent.click(button);

    expect(content.classList.contains("collapsible--collapsed")).toBe(true);
  });

  // no child (content)
  it("renders content block with NO CSS class 'collapsible--expanded' after pressing button 2 times", async () => {
    render(
      <Collapsible title={`Testing component`}>{childrenContent}</Collapsible>
    );

    const button = screen.getByRole("button");
    const content = screen.queryByText(childrenContent);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    fireEvent.click(button);

    fireEvent.click(button);

    expect(content.classList.contains("collapsible--expanded")).toBe(false);
  });

  it("toggles content visibility when the button is clicked multiple times", () => {
    render(
      <Collapsible title="Toggle Test">
        <div>{childrenContent}</div>
      </Collapsible>
    );

    const toggleButton = screen.getByRole("button");

    // Initially, the content should be hidden
    expect(screen.getByText(childrenContent).parentElement).toHaveClass(
      "collapsible--collapsed"
    );

    // Click to expand
    fireEvent.click(toggleButton);
    expect(screen.getByText(childrenContent).parentElement).toHaveClass(
      "collapsible--expanded"
    );

    // Click to collapse
    fireEvent.click(toggleButton);
    expect(screen.getByText(childrenContent).parentElement).toHaveClass(
      "collapsible--collapsed"
    );
  });

  it("toggles button class when expanding and collapsing", () => {
    render(<Collapsible title="Button Toggle Test" />);

    const toggleButton = screen.getByRole("button");

    // Initially, the button should not have the expanded class
    expect(toggleButton).not.toHaveClass("collapsible__btn--expanded");

    // Click to expand
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveClass("collapsible__btn--expanded");

    // Click to collapse
    fireEvent.click(toggleButton);
    expect(toggleButton).not.toHaveClass("collapsible__btn--expanded");
  });

  it("applies class names as level-one by default", () => {
    const { container } = render(<Collapsible />);

    expect(
      container.querySelector(".collapsible__title--level-one")
    ).toBeInTheDocument();
    expect(
      container.querySelector(".collapsible__btn--level-one")
    ).toBeInTheDocument();
  });

  it("applies class names based on level props", () => {
    const { container } = render(<Collapsible level="two" />);

    expect(
      container.querySelector(".collapsible__title--level-two")
    ).toBeInTheDocument();
    expect(
      container.querySelector(".collapsible__btn--level-two")
    ).toBeInTheDocument();
  });

  it("applies class names as borderBottom false by default", () => {
    const { container } = render(<Collapsible />);

    expect(
      container.querySelector(".collapsible__border-bottom")
    ).not.toBeInTheDocument();
  });

  it("applies class names based on borderBottom props", () => {
    const { container } = render(<Collapsible borderBottom={true} />);

    expect(
      container.querySelector(".collapsible__border-bottom")
    ).toBeInTheDocument();
  });
});
