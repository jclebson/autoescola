import React from "react";

import Hero from "../Components/Hero";
import BgHighwayImage from "./assets/bg-highway.jpg";
import BgCarImage from "./assets/bg-car.jpg";
import Heading from "../Components/Heading";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("Título", "Ganhe sua liberdade de ir e vir")}</h1>
    <p>A auto escola líder em aprovação.</p>
  </Hero>
);

export const withList = () => (
  <Hero image={BgCarImage}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong>
        <br /> de ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
      <li>Optio voluptas laboriosam suscipit nisi omnis laborum</li>
      <li>
        Impedit inventore debitis modi, quis labore alias doloribus corporis
      </li>
    </ul>
  </Hero>
);