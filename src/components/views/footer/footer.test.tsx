import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer.component";

describe("Footer Component", () => {
  //   it("renders version correctly", () => {
  //     const { getByText } = render(<Footer />);
  //     const versionElement = getByText(/v8\.3\.1/i);
  //     expect(versionElement).toBeInTheDocument();
  //   });

  it("renders copyright information correctly", () => {
    const { getByText } = render(<Footer />);
    const copyrightElement = getByText(/© 2020 - 2024\. Built with/i);
    expect(copyrightElement).toBeInTheDocument();
  });

  it("renders heart icon correctly", () => {
    const { getByTestId } = render(<Footer />);
    const heartIcon = getByTestId("heart-icon");
    expect(heartIcon).toBeInTheDocument();
  });

  it("renders Lx Kish icon correctly", () => {
    const { getByTestId } = render(<Footer />);
    const lxKishIcon = getByTestId("lx-kish-icon");
    expect(lxKishIcon).toBeInTheDocument();
  });
});
