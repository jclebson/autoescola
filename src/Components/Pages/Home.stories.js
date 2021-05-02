import React from "react";
import Home from "./Home";

import { BuildProductList } from "Models/Builders/Products";

export default {
  title: "Components/Pages/Home",
  component: Home,
};

export const usage = () => {
  const products = BuildProductList(8);

  return <Home products={products} />;
};
