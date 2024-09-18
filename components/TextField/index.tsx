import React from "react";
import { StyleSheet, TextInput } from "react-native";

type TextFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
};

const _TextField = ({ onChangeText, value, placeholder }: TextFieldProps) => {
  return (
    <TextInput
      style={styles.textfield}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

export const TextField = React.memo(_TextField);

const styles = StyleSheet.create({
  textfield: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    padding: 16,
    color: "black",
    borderColor: "gray",
    borderWidth: 1,
    fontFamily: "Star-Shield"
  }
});
