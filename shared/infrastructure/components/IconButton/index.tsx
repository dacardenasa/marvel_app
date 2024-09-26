import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Typography } from "../Typography";

type IconButtonProps = {
  label: string;
  sourceIcon: string;
  onPress: () => void;
};

const _IconButton = ({ label, onPress, sourceIcon }: IconButtonProps) => {
  return (
    <Pressable style={styles.buttonBox} onPress={onPress}>
      <Image
        source={sourceIcon}
        placeholder={label}
        contentFit="contain"
        transition={1000}
        style={styles.image}
      />
      <Typography type="title" lightColor="#E53034" darkColor="#E53034">
        {label}
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  image: { width: 128, height: 128, marginBottom: 16 }
});

export const IconButton = React.memo(_IconButton);
