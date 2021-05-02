import React from "react";

import Error from "Components/Pages/Error";
import TakenImage from "Draws/Taken";

const Error404 = () => {
  return (
    <Error
      title="Página não encontrada"
      image={<TakenImage />}
      description="Ops! Parece que essa página foi abduzida."
    />
  );
};

export default Error404;
