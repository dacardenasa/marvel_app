import React, { ComponentProps } from "react";

import { type IconProps } from "@expo/vector-icons/build/createIconSet";

import { Box, TabBarIcon, Typography } from "@/components";
import { Platform, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TabBarButtonProps = IconProps<ComponentProps<typeof Ionicons>["name"]> & {
  color: string;
  label: string;
};

const _TabBarButton = ({ name, color, label }: TabBarButtonProps) => {
  return (
    <Box
      darkColor="transparent"
      lightColor="transparent"
      style={{
        ...styles.container,
        ...(Platform.OS === "ios" ? { top: 16 } : {})
      }}
    >
      <TabBarIcon name={name} color={color} />
      <Typography style={{ color }}>{label}</Typography>
    </Box>
  );
};

export const TabBarButton = React.memo(_TabBarButton);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
