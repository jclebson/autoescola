import React from "react";
import Error from "./Error";
import TakenImage from "Draws/Taken";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => {
  return (
    <Error
      title="Página não encontrada"
      image={<TakenImage />}
      description="Ops! Parece que essa página foi abduzida."
    />
  );
};
