import React from "react";
import PropTypes from "prop-types";
import Section from "Components/Molecules/Section";
import Grid from "Components/Atoms/Grid";
import Heading from "Components/Atoms/Heading";
import Button from "Components/Atoms/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    height: auto;
    max-width: 350px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const Error = ({ image, title, description }) => {
  return (
    <Section>
      <Grid sm={2}>
        <div>
          <Heading>
            <ErrorTitle>{title}</ErrorTitle>
          </Heading>
          <h6>{description}</h6>
          <div>
            <Button as={Link} to="/" color="primary">
              Ir para Página Inicial
            </Button>
          </div>
        </div>
        <div>
          <ImageContainer>{image}</ImageContainer>
        </div>
      </Grid>
    </Section>
  );
};

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
