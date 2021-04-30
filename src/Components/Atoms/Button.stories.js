import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { actions } from "@storybook/addon-actions";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

const evts = actions({ onClick: "clicked" });

const Toolbar = styled.div`
  & > * {
    margin-right: 8px;
  }
`;

const ButtonsWrapper = (props) => {
  return (
    <div>
      <p>Enabled:</p>
      <Toolbar>
        <Button {...props} {...evts}>
          Default
        </Button>
        <Button {...props} {...evts} color="primary">
          Primary
        </Button>
        <Button {...props} {...evts} color="danger">
          Danger
        </Button>
      </Toolbar>

      <p>As a Link:</p>
      <Toolbar>
        <Button as="a" href="#" {...props} {...evts}>
          Default
        </Button>
        <Button as="a" href="#" {...props} {...evts} color="primary">
          Primary
        </Button>
        <Button as="a" href="#" {...props} {...evts} color="danger">
          Danger
        </Button>
      </Toolbar>

      <p>Disabled:</p>
      <Toolbar>
        <Button {...props} disabled {...evts}>
          Default
        </Button>
        <Button {...props} disabled {...evts} color="primary">
          Primary
        </Button>
        <Button {...props} disabled {...evts} color="danger">
          Danger
        </Button>
      </Toolbar>
    </div>
  );
};

export const usage = () => <ButtonsWrapper />;

export const outlined = () => <ButtonsWrapper variant="outlined" />;

export const link = () => <ButtonsWrapper variant="link" />;
