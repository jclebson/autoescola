import React from "react";
import { render, screen } from "test-utils";

import ProductDetailRoute from "./index";
import { useProduct } from "Hooks/Products";
import { BuildProduct } from "Models/Builders/Products";

jest.mock("Hooks/Products");

test("renders witdh a product", () => {
  useProduct.mockReturnValue(BuildProduct());

  render(<ProductDetailRoute />);

  const linkElement = screen.getByText(/Sleek Wooden Towels/i, {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute />);

  const linkElement = screen.getByText(/Serviço não encontrado/i, {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});
