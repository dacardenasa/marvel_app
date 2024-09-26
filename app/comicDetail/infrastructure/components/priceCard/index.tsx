import React from "react";
import { StyleSheet } from "react-native";

import { Image } from "expo-image";

import { Box, Typography } from "@/shared/infrastructure/components";
import { Price } from "@/shared/domain";
import comicIcon from "@/assets/images/comic.png";

type PriceCardProps = Price;

const _PriceCard = ({ type, price }: PriceCardProps) => {
  return (
    <Box style={styles.container}>
      <Image
        style={styles.image}
        source={comicIcon}
        placeholder="hulk"
        contentFit="scale-down"
        transition={1000}
      />
      <Box>
        <Typography style={{ marginBottom: 16 }}>{type}</Typography>
        <Typography>${price}</Typography>
      </Box>
    </Box>
  );
};

export const PriceCard = React.memo(_PriceCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    columnGap: 16
  },
  image: {
    width: 64,
    height: 64
  }
});
