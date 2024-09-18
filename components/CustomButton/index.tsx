import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { Typography } from "../Typography";

type CustomButtonProps = PressableProps & {
  label: string;
};

const _CustomButton = ({ label, disabled, ...props }: CustomButtonProps) => {
  return (
    <Pressable
      style={{
        ...styles.button,
        ...(disabled ? { backgroundColor: "gray" } : {})
      }}
      disabled={disabled}
      {...props}
    >
      <Typography lightColor="white" darkColor="white">
        {label}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 45,
    borderRadius: 8,
    backgroundColor: "#E53034"
  }
});

export const CustomButton = React.memo(_CustomButton);
