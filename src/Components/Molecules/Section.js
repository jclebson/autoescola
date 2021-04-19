import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import Container from "../Atoms/Container";

const Content = styled.div`
  margin: 40px 0;
`;

const Section = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

Section.defaultProps = {
  children: undefined,
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
