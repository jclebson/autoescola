import React from "react";
import { render } from "test-utils";

import Hero from "./Hero";

test("renders Hero with children", () => {
  const component = render(
    <Hero>
      <p>Jefferson Clebson</p>
    </Hero>
  );

  // component.debug();
  expect(component.getByText("Jefferson Clebson")).toBeInTheDocument();
});

test("renders image background", () => {
  const image_url = "http://teste.com/image.jpg";
  const { getByTestId } = render(<Hero image={image_url} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image_url,
  });
});
