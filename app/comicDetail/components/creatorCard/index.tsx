import React from "react";
import { StyleSheet } from "react-native";

import { Image } from "expo-image";

import { CreatorsItem } from "@/models";
import { Box, Typography } from "@/components";

type CreatorCardProps = Omit<CreatorsItem, "resourceURI">;

const _CreatorCard = ({ name, role }: CreatorCardProps) => {
  return (
    <Box style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/hulk.png")}
        placeholder="hulk"
        contentFit="scale-down"
        transition={1000}
      />
      <Box>
        <Typography style={{ marginBottom: 16 }}>{name}</Typography>
        <Typography>{role}</Typography>
      </Box>
    </Box>
  );
};

export const CreatorCard = React.memo(_CreatorCard);

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
