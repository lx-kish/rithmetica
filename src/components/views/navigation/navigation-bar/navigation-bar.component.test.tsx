import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import NavigationBar from "./navigation-bar.component";

// --- Mocks for child components ---
vi.mock("../burger icon/icon-burger.component", () => ({
  default: ({ open, setOpen }: { open: boolean; setOpen: () => void }) => (
    <div data-testid="burger-icon" onClick={setOpen}>
      BurgerIcon: {open ? "open" : "closed"}
    </div>
  ),
}));

vi.mock("../slide bar/slide-bar.component", () => ({
  default: ({ open }: { open: boolean; hideSliderMenu: () => void }) => (
    <div data-testid="slide-bar">SlideBar: {open ? "open" : "closed"}</div>
  ),
}));

// --- Clean up document.body classes after each test ---
afterEach(() => {
  document.body.className = "";
  vi.clearAllMocks();
});

describe("NavigationBar Component", () => {
  it("renders a container with class 'navigation'", () => {
    const { container } = render(<NavigationBar />);
    const nav = container.querySelector("div.navigation");
    expect(nav).toBeInTheDocument();
  });

  it("renders background div with class 'navigation__bg' when open is false", () => {
    const { container } = render(<NavigationBar />);
    const bg = container.querySelector("div.navigation__bg");
    expect(bg?.className).toBe("navigation__bg");
  });

  it("renders BurgerIcon with text 'BurgerIcon: closed' when open is false", () => {
    const { getByTestId } = render(<NavigationBar />);
    const burgerIcon = getByTestId("burger-icon");
    expect(burgerIcon.textContent).toBe("BurgerIcon: closed");
  });

  it("renders SlideBar with text 'SlideBar: closed' when open is false", () => {
    const { getByTestId } = render(<NavigationBar />);
    const slideBar = getByTestId("slide-bar");
    expect(slideBar.textContent).toBe("SlideBar: closed");
  });

  it("does not add 'body-fixed' class to document.body when open is false", () => {
    render(<NavigationBar />);
    expect(document.body.classList.contains("body-fixed")).toBe(false);
  });

  it("toggles open state to true when BurgerIcon is clicked", () => {
    const { getByTestId } = render(<NavigationBar />);
    const burgerIcon = getByTestId("burger-icon");
    fireEvent.click(burgerIcon);
    expect(burgerIcon.textContent).toBe("BurgerIcon: open");
  });

  it("adds 'body-fixed' class to document.body when open becomes true", () => {
    const { getByTestId } = render(<NavigationBar />);
    const burgerIcon = getByTestId("burger-icon");
    fireEvent.click(burgerIcon);
    expect(document.body.classList.contains("body-fixed")).toBe(true);
  });

  it("renders background div with 'is-active' class when open is true", () => {
    const { container, getByTestId } = render(<NavigationBar />);
    const burgerIcon = getByTestId("burger-icon");
    fireEvent.click(burgerIcon);
    const bg = container.querySelector("div.navigation__bg");
    expect(bg?.className).toBe("navigation__bg is-active");
  });

  it("sets open to false when background div is clicked while open is true", () => {
    const { container, getByTestId } = render(<NavigationBar />);
    const burgerIcon = getByTestId("burger-icon");
    fireEvent.click(burgerIcon); // toggle open to true
    const bg = container.querySelector("div.navigation__bg");
    fireEvent.click(bg!);
    expect(burgerIcon.textContent).toBe("BurgerIcon: closed");
  });

  it("removes 'body-fixed' class from document.body when background div is clicked", () => {
    const { container, getByTestId } = render(<NavigationBar />);
    const burgerIcon = getByTestId("burger-icon");
    fireEvent.click(burgerIcon); // toggle open to true
    const bg = container.querySelector("div.navigation__bg");
    fireEvent.click(bg!);
    expect(document.body.classList.contains("body-fixed")).toBe(false);
  });
});
