import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders call to action", () => {
  render(<App />);
  const linkElement = screen.getByText(/Matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
});
