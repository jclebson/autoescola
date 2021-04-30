import React from "react";

import ProductDetail from "Components/Pages/ProductDetail";
import { useScrollToTop } from "Hooks/Scroll";

const ProductDetailRoute = () => {
  useScrollToTop();

  return <ProductDetail />;
};

export default ProductDetailRoute;
