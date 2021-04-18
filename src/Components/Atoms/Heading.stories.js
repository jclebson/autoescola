import React from "react";

import Heading from "./Heading";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Components/Atoms/Heading",
  component: Heading,
};

export const usage = () => (
  <React.Fragment>
    <Heading>
      <h1>{text("Título 1", "Título 1")}</h1>
    </Heading>
    <Heading>
      <h2>{text("Título 2", "Título 2")}</h2>
    </Heading>
    <Heading>
      <h3>{text("Título 3", "Título 3")}</h3>
    </Heading>
    <Heading>
      <h4>{text("Título 4", "Título 4")}</h4>
    </Heading>
  </React.Fragment>
);
