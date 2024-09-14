import * as React from "react";
import { render } from "@testing-library/react-native";
import { Box } from "../Box";
import { Typography } from "../Typography";

test("<Box /> renders children correctlly", () => {
  const { getByText } = render(
    <Box>
      <Typography>Hello world</Typography>
    </Box>
  );
  const text = getByText("Hello world");
  expect(text).toBeTruthy();
});
