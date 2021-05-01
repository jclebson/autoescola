import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeRoute from "Routes/HomeRoute";
import AboutRoute from "Routes/AboutRoute";
import ProductDetailRoute from "Routes/Servicos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/sobre" element={<AboutRoute />} />
      <Route path="/servicos/:slang" element={<ProductDetailRoute />} />
    </Routes>
  );
};

export default AppRoutes;
