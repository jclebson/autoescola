import { breakAt, BreakpointSizes } from "./Breakpoints";

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl],
])("breakAt at width %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
