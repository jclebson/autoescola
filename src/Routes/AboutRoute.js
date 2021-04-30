import React from "react";

import About from "Components/Pages/About";
import { useScrollToTop } from "Hooks/Scroll";

const AboutRoute = () => {
  useScrollToTop();

  return <About />;
};

export default AboutRoute;
