import React from "react";
import { render, screen } from "test-utils";

import About from "./About";

beforeEach(() => {
  jest.resetAllMocks();
});

test("renders About page", () => {
  render(<About />);
  const linkElement = screen.getByText(/Conheça nossos professores/i);
  expect(linkElement).toBeInTheDocument();
});

test("scrolls to top in first render", () => {
  render(<About />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
