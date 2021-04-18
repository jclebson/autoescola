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

export const usage = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button {...evts}>Default</Button>
      <Button {...evts} color="primary">
        Primary
      </Button>
      <Button {...evts} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button disabled {...evts}>
        Default
      </Button>
      <Button disabled {...evts} color="primary">
        Primary
      </Button>
      <Button disabled {...evts} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const outlined = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="outlined" {...evts}>
        Default
      </Button>
      <Button variant="outlined" {...evts} color="primary">
        Primary
      </Button>
      <Button variant="outlined" {...evts} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="outlined" disabled {...evts}>
        Default
      </Button>
      <Button variant="outlined" disabled {...evts} color="primary">
        Primary
      </Button>
      <Button variant="outlined" disabled {...evts} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);

export const link = () => (
  <div>
    <p>Enabled:</p>
    <Toolbar>
      <Button variant="link" {...evts}>
        Default
      </Button>
      <Button variant="link" {...evts} color="primary">
        Primary
      </Button>
      <Button variant="link" {...evts} color="danger">
        Danger
      </Button>
    </Toolbar>
    <p>Disabled:</p>
    <Toolbar>
      <Button variant="link" disabled {...evts}>
        Default
      </Button>
      <Button variant="link" disabled {...evts} color="primary">
        Primary
      </Button>
      <Button variant="link" disabled {...evts} color="danger">
        Danger
      </Button>
    </Toolbar>
  </div>
);
