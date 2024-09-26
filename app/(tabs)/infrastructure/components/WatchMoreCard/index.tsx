import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet } from "react-native";

import marvelIcon from "@/assets/images/marvel.png";

import { Typography } from "@/shared/infrastructure/components";

type WatchMoreCardProps = {
  handlePressCard: () => void;
};

export const WatchMoreCard = ({ handlePressCard }: WatchMoreCardProps) => {
  return (
    <Pressable onPress={handlePressCard} style={styles.container}>
      <Image
        style={styles.image}
        source={marvelIcon}
        placeholder="marvel"
        contentFit="scale-down"
        transition={1000}
      />
      <Typography type="defaultSemiBold" darkColor="black">
        Watch more...
      </Typography>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 385,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 16
  },
  image: { width: 128, height: 48 }
});
