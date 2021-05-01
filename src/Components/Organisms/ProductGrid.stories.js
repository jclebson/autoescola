import React from "react";
import ProductGrid from "./ProductGrid";

import { BuildProductList } from "Models/Builders/Products";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => {
  const products = BuildProductList(6);

  return <ProductGrid products={products} />;
};
