import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ViewStyle } from "react-native";
import { Box } from "../Box";

export const Container = ({
  children,
  style = {}
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <Box style={{ ...style, paddingTop: insets.top }}>
      {children}
    </Box>
  );
};
