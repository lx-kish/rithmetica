import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import Footer from "./footer.component";

describe("Footer test suit", () => {
  afterEach(cleanup);

  it("renders footer with class 'footer' correctly", () => {
    const { container } = render(<Footer />);
    expect(container.querySelector(".footer")).toBeInTheDocument();
  });

  it("renders footer containing two paragraphs correctly", () => {
    render(<Footer />);
    expect(screen.getAllByRole("paragraph")).toHaveLength(2);
  });

  it("renders footer containing paragraph with 'footer__version' classname correctly", () => {
    render(<Footer />);

    expect(screen.getAllByRole("paragraph")[0]).toHaveClass("footer__version");
  });

  it("renders footer containing paragraph with 'footer__credentials' classname correctly", () => {
    render(<Footer />);
    expect(screen.getAllByRole("paragraph")[1]).toHaveClass(
      "footer__credentials"
    );
  });

  it("renders heart icon correctly", () => {
    const { container } = render(<Footer />);

    const heartIcon = container.querySelector(
      "[data-icon='heart']"
    ) as HTMLImageElement;

    expect(heartIcon).toBeInTheDocument();
  });

  it("renders Lx Kish icon correctly", () => {
    const { container } = render(<Footer />);

    const lxKishIcon = container.querySelector(
      "[data-icon='lx-kish']"
    ) as HTMLImageElement;

    expect(lxKishIcon).toBeInTheDocument();
  });
});
