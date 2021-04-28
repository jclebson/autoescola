import React from "react";
import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "Components/Atoms/Button";
import SvgSpeed from "Draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions },
};

export const usage = () => {
  return (
    <Callout>
      <CalloutBody>
        <h6>Faça sua matrícula agora mesmo</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          non molestias dolorem doloribus? Error itaque unde beatae ut ea iste
          omnis. Vel, ratione nam? Eligendi mollitia fugit accusantium nobis
          saepe.
        </p>
        <CalloutActions>
          <Button color="primary">Matricular</Button>
        </CalloutActions>
      </CalloutBody>
      <CalloutMedia>
        <SvgSpeed></SvgSpeed>
      </CalloutMedia>
    </Callout>
  );
};
