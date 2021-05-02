import React from "react";
import { useParams } from "react-router-dom";

import ProductDetail from "Components/Pages/ProductDetail";
import { useScrollToTop } from "Hooks/Scroll";
import { useProduct } from "Hooks/Products";
import Error from "Components/Pages/Error";
import NotFoundImage from "Draws/About";

const ProductDetailRoute = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        title="Serviço não encontrado"
        image={<NotFoundImage />}
        description="Ops! O serviço não foi encontrado ou pode está indisponível."
      />
    );
  }

  return <ProductDetail product={product} />;
};

export default ProductDetailRoute;
