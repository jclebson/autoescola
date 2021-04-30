import React from "react";
import { render, screen } from "test-utils";

import ProductDetail from "./ProductDetail";

test("renders ProductDetail page", () => {
  render(<ProductDetail />);
  const linkElement = screen.getByText(/Documentos necessários:/i);
  expect(linkElement).toBeInTheDocument();
});
