import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SlideBar from "./slide-bar.component";

// --- Mock the sections module with default items ---
vi.mock("../../../../sections", () => ({
  default: [
    { link: "/home", className: "home-class", name: "Home" },
    { link: "/about", className: "about-class", name: "About" },
  ],
}));

describe("SlideBar Component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders nav element with class 'slide-bar' when open is false", () => {
    const hideSliderMenu = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const nav = container.querySelector("nav");
    expect(nav?.className).toBe("slide-bar");
  });

  it("renders nav element with class 'slide-bar is-active' when open is true", () => {
    const hideSliderMenu = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <SlideBar open={true} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const nav = container.querySelector("nav");
    expect(nav?.className).toBe("slide-bar is-active");
  });

  it("renders the correct number of Link elements", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(2);
  });

  it("renders first Link with text 'Home'", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("Home");
    expect(link).toBeInTheDocument();
  });

  it("renders first Link with correct href '/home'", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("Home").closest("a");
    expect(link?.getAttribute("href")).toBe("/home");
  });

  it("renders first Link with class 'slide-bar__item home-class'", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("Home").closest("a");
    expect(link?.className).toBe("slide-bar__item home-class");
  });

  it("calls hideSliderMenu when the first Link is clicked", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("Home");
    fireEvent.click(link);
    expect(hideSliderMenu).toHaveBeenCalledTimes(1);
  });

  it("renders second Link with text 'About'", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("About");
    expect(link).toBeInTheDocument();
  });

  it("renders second Link with correct href '/about'", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("About").closest("a");
    expect(link?.getAttribute("href")).toBe("/about");
  });

  it("renders second Link with class 'slide-bar__item about-class'", () => {
    const hideSliderMenu = vi.fn();
    render(
      <MemoryRouter>
        <SlideBar open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const link = screen.getByText("About").closest("a");
    expect(link?.className).toBe("slide-bar__item about-class");
  });

  it("renders no Link elements when sections array is empty", async () => {
    // Reset modules and override the sections module to be empty.
    vi.resetModules();
    vi.doMock("../../../../sections", () => ({
      default: [],
    }));
    // Re-import SlideBar with the new mock.
    const { default: SlideBarEmpty } = await import("./slide-bar.component");
    const hideSliderMenu = vi.fn();
    const { container } = render(
      <MemoryRouter>
        <SlideBarEmpty open={false} hideSliderMenu={hideSliderMenu} />
      </MemoryRouter>
    );
    const links = container.querySelectorAll("a");
    expect(links.length).toBe(0);
  });
});
