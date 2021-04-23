import React from "react";
import ProductGrid from "./ProductGrid";
import CardImage from "stories/assets/card-placeholder.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => {
  return (
    <ProductGrid
      products={[
        {
          title: "Título 1",
          image: CardImage,
          summary: "Qualquer texto",
          id: 1,
        },
        {
          title: "Título 2",
          image: CardImage,
          summary: "Qualquer texto",
          id: 2,
        },
        {
          title: "Título 3",
          image: CardImage,
          summary: "Qualquer texto",
          id: 3,
        },
        {
          title: "Título 4",
          image: CardImage,
          summary: "Qualquer texto",
          id: 4,
        },
        {
          title: "Título 5",
          image: CardImage,
          summary: "Qualquer texto",
          id: 5,
        },
        {
          title: "Título 6",
          image: CardImage,
          summary: "Qualquer texto",
          id: 6,
        },
      ]}
    />
  );
};
