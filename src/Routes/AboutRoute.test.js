import React from "react";
import { render } from "test-utils";

import AboutRoute from "./AboutRoute";

test("scrolls to top in first render", () => {
  render(<AboutRoute />);
  expect(window.scrollTo).toBeCalledTimes(1);
});
