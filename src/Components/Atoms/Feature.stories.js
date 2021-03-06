import React from "react";
import Feature from "./Feature";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Grid from "./Grid";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => {
  return (
    <Feature icon={<FaCar />} title="Teste">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Feature>
  );
};

export const withGrid = () => {
  return (
    <Grid sm="2" md="4">
      <Feature icon={<FaCar />} title="Maior e melhor frota">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Feature>

      <Feature icon={<FaKey />} title="Habilitação mais rápida">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Feature>

      <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Feature>

      <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Feature>
    </Grid>
  );
};
