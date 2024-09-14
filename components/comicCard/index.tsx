import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Box } from "../Box";

type ComicCardProps = {
  id: number;
  thumbnail: string;
  handlePressCard: () => void;
  children: React.ReactNode;
};

const _ComicCard = ({
  children,
  id,
  thumbnail,
  handlePressCard
}: ComicCardProps) => {
  return (
    <Pressable onPress={handlePressCard}>
      <Box style={styles.container}>
        <Image
          style={styles.image}
          source={thumbnail}
          placeholder={id}
          transition={1000}
        />
        <Box style={styles.content}>
          {children}
        </Box>
      </Box>
    </Pressable>
  );
};

export const ComicCard = React.memo(_ComicCard);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "80%"
  },
  content: {
    height: "20%"
  }
});
