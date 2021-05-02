import Section from "Components/Molecules/Section";
import React from "react";
import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Heading from "./Heading";
import Button from "./Button";
import CardImage from "Stories/assets/card-placeholder.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => {
  return (
    <Section inverse>
      <Card>
        <CardBody>
          <Heading>
            <h6>Título</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quos.
            Eum eveniet eligendi sint necessitatibus corrupti libero.
          </p>
          <div>
            <Button color="primary" variant="link">
              Saiba mais
            </Button>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
};

export const withMedia = () => {
  return (
    <Section inverse>
      <Card>
        <CardMedia image={CardImage} />
        <CardBody>
          <Heading>
            <h6>Título</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quos.
            Eum eveniet eligendi sint necessitatibus corrupti libero.
          </p>
          <div>
            <Button color="primary" variant="link">
              Saiba mais
            </Button>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
};

export const onlyMedia = () => {
  return (
    <Section inverse>
      <Card>
        <CardMedia image={CardImage}>
          <CardMediaDescription>
            <h5>Descrição</h5>
          </CardMediaDescription>
        </CardMedia>
      </Card>
    </Section>
  );
};
