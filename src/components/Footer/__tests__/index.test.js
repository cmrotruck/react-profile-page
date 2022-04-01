import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "..";

afterEach(cleanup);

describe("Nav component", () => {
  it("renders correctly", () => {
    render(<Footer />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Footer />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("linkedIn logo renders", () => {
    render(
      <img src="./assets/footer/LI-ln-Bug.png" alt="linked in logo small"></img>
    );
  });
});
