import React from "react";
import { render, screen, fireEvent } from "test-utils";

import Accordion from "./Accordion";

const text = "My children text";
const title = "My title";

test("renders with title", () => {
  render(<Accordion title={title}></Accordion>);

  expect(screen.queryByText(title)).toBeInTheDocument();
});

test("renders without children", () => {
  render(<Accordion>{text}</Accordion>);

  expect(screen.queryByText(text)).not.toBeInTheDocument();
});

test("triggers onChange when it is clicked", () => {
  const handleChange = jest.fn();

  render(<Accordion title={title} onChange={handleChange}></Accordion>);

  fireEvent.click(screen.getByText(title));

  expect(handleChange).toBeCalled();
});

describe("when is controlled", () => {
  describe("when starts opened", () => {
    test("renders with children", () => {
      render(<Accordion open>{text}</Accordion>);

      expect(screen.queryByText(text)).toBeInTheDocument();
    });
  });

  test("triggers onChange when it is clicked", () => {
    const handleChange = jest.fn();
    render(<Accordion title={title} open onChange={handleChange} />);

    fireEvent.click(screen.getByText(title));

    expect(handleChange).toBeCalled();
  });

  test("hide children when open changes to false", () => {
    const { rerender } = render(
      <Accordion title={title} open>
        {text}
      </Accordion>
    );

    rerender(
      <Accordion title={title} open={false}>
        {text}
      </Accordion>
    );

    fireEvent.click(screen.getByText(title));

    expect(screen.queryByText(text)).not.toBeInTheDocument();
  });

  describe("when starts closed", () => {
    test("renders without children", () => {
      render(<Accordion open={false}>{text}</Accordion>);

      expect(screen.queryByText(text)).not.toBeInTheDocument();
    });
  });
});
