import React from "react";
import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => {
  return (
    <React.Fragment>
      <Accordion title="Como eu renovo minha CNH?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
        nisi cumque quia beatae
      </Accordion>

      <Accordion title="Como faço a mudança de categoria?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
        nisi cumque quia beatae
      </Accordion>

      <Accordion title="Fui multado, e agora?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
        nisi cumque quia beatae
      </Accordion>
    </React.Fragment>
  );
};

export const withGroup = () => {
  return (
    <AccordionGroup>
      <Accordion title="Como eu renovo minha CNH?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
        nisi cumque quia beatae
      </Accordion>

      <Accordion title="Como faço a mudança de categoria?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
        nisi cumque quia beatae
      </Accordion>

      <Accordion title="Fui multado, e agora?">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
        nisi cumque quia beatae
      </Accordion>
    </AccordionGroup>
  );
};
