import { BrowserRouter } from "react-router-dom";
import { render, cleanup, screen } from "@testing-library/react";

import Collapsible from "./collapsible.component";
import userEvent from "@testing-library/user-event";

function renderUI() {
  return render(
    <BrowserRouter>
      <Collapsible title={`Testing component`}>I'm collapsible</Collapsible>
    </BrowserRouter>
  );
}

describe("Collapsible component test suit", () => {
  beforeEach(renderUI);

  afterEach(cleanup);

  // render button
  it("collapsible component should have expand button", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  // render icom
  it("collapsible component should have chevron icon within expand button", () => {
    const { container } = renderUI();
    const icon = container.querySelector("[data-icon='chevron-down']");

    expect(icon).toBeInTheDocument();
  });

  // child (content) has collapsible--collapsed CSS class
  it("collapsible component's content block should have CSS class 'collapsible--collapsed'", () => {
    const content = screen.queryByText(/^I'm collapsible$/i);
    expect(content?.classList.contains("collapsible--collapsed")).toBe(true);
  });

  // no child (content)
  it("collapsible component's content block should have CSS class 'collapsible--expanded' after pressing button", async () => {
    const button = screen.getByRole("button");
    const content = screen.queryByText(/^I'm collapsible$/i);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    const user = userEvent.setup();

    await user.click(button);

    expect(content.classList.contains("collapsible--expanded")).toBe(true);
  });

  // no child (content)
  it("collapsible component's content block should NOT have CSS class 'collapsible--collapsed' after pressing button", async () => {
    const button = screen.getByRole("button");
    const content = screen.queryByText(/^I'm collapsible$/i);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    const user = userEvent.setup();

    await user.click(button);

    expect(content.classList.contains("collapsible--collapsed")).toBe(false);
  });

  // no child (content)
  it("collapsible component's content block should have CSS class 'collapsible--collapsed' after pressing button 2 times", async () => {
    const button = screen.getByRole("button");
    const content = screen.queryByText(/^I'm collapsible$/i);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    const user = userEvent.setup();

    await user.click(button);

    await user.click(button);

    expect(content.classList.contains("collapsible--collapsed")).toBe(true);
  });

  // no child (content)
  it("collapsible component's content block should NOT have CSS class 'collapsible--expanded' after pressing button 2 times", async () => {
    const button = screen.getByRole("button");
    const content = screen.queryByText(/^I'm collapsible$/i);

    if (!button) {
      throw new Error("The button wasn't found");
    }

    if (!content) {
      throw new Error("The content wasn't found");
    }

    const user = userEvent.setup();

    await user.click(button);

    await user.click(button);

    expect(content.classList.contains("collapsible--expanded")).toBe(false);
  });
});
