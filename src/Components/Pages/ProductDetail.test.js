import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";
import { BuildProduct } from "Models/Builders/Products";

test("renders ProductDetail page", () => {
  render(<ProductDetail product={BuildProduct()} />);
  const linkElement = screen.getByText(/Sleek Wooden Towels/i, {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});
