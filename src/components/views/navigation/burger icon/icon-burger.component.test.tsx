import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import IconBurger from "./icon-burger.component";

describe("IconBurger Component", () => {
  it('renders a div with class "burger" when open is false', () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    expect(burgerDiv.className).toBe("burger");
  });

  it('renders a div with class "burger is-active" when open is true', () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={true} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    expect(burgerDiv.className).toBe("burger is-active");
  });

  it("renders exactly three span children inside the burger div", () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    const spanElements = burgerDiv.querySelectorAll("span");
    expect(spanElements.length).toBe(3);
  });

  it('renders a span child with class "line"', () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    const firstSpan = burgerDiv.querySelector("span");
    expect(firstSpan?.className).toBe("line");
  });

  it("calls setOpen when the burger div is clicked", () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    fireEvent.click(burgerDiv);
    expect(mockSetOpen).toHaveBeenCalledTimes(1);
  });

  it("renders the burger div in the document", () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild;
    expect(burgerDiv).toBeInTheDocument();
  });

  it('renders the burger div with exactly "burger" as its class when open is false', () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    expect(burgerDiv.className).toBe("burger");
  });

  it('renders the burger div with exactly "burger is-active" as its class when open is true', () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={true} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    expect(burgerDiv.className).toBe("burger is-active");
  });

  it("renders span elements with empty content", () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    const spanElements = burgerDiv.querySelectorAll("span");
    expect(spanElements[0].textContent).toBe("");
  });

  it("calls setOpen exactly two times when the burger div is clicked twice", () => {
    const mockSetOpen = vi.fn();
    const { container } = render(
      <IconBurger open={false} setOpen={mockSetOpen} />
    );
    const burgerDiv = container.firstChild as HTMLElement;
    fireEvent.click(burgerDiv);
    fireEvent.click(burgerDiv);
    expect(mockSetOpen).toHaveBeenCalledTimes(2);
  });
});
