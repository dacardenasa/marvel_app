import * as React from "react";
import { render } from '@testing-library/react-native';
import { Typography } from "../Typography";

it(`Typography renders correctly`, () => {
  const { getByText } = render(<Typography>Snapshot test!</Typography>);
  const label = getByText("Snapshot test!");
  expect(label).toBeTruthy();
});
