import React from "react";
import { StyleSheet } from "react-native";

import { Image } from "expo-image";

import { Box, Typography } from "@/shared/infrastructure/components";
import { CreatorsItem } from "@/shared/domain";
import creatorIcon from "@/assets/images/hulk.png";

type CreatorCardProps = Omit<CreatorsItem, "resourceURI">;

const _CreatorCard = ({ name, role }: CreatorCardProps) => {
  return (
    <Box style={styles.container}>
      <Image
        style={styles.image}
        source={creatorIcon}
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
