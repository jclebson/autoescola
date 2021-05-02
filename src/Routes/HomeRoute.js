import React from "react";

import Home from "Components/Pages/Home";
import { useProducts } from "Hooks/Products";

const HomeRoute = () => {
  return <Home products={useProducts()} />;
};

export default HomeRoute;
