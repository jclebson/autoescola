import React from "react";
import { useParams } from "react-router-dom";

import ProductDetail from "Components/Pages/ProductDetail";
import { useScrollToTop } from "Hooks/Scroll";
import { useProduct } from "Hooks/Products";

const ProductDetailRoute = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  return <ProductDetail product={product} />;
};

export default ProductDetailRoute;
