import { Typography } from "@/components";
import { Image } from "expo-image";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

type WatchMoreCardProps = {
  handlePressCard: () => void;
};

export const WatchMoreCard = ({ handlePressCard }: WatchMoreCardProps) => {
  return (
    <Pressable onPress={handlePressCard} style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/marvel.png")}
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
