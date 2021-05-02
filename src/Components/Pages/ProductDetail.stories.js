import React from "react";
import ProductDetail from "./ProductDetail";

import { BuildProduct } from "Models/Builders/Products";

export default {
  title: "Components/Pages/ProductDetail",
  component: ProductDetail,
};

export const usage = () => {
  return <ProductDetail product={BuildProduct()} />;
};
