import React from "react";
import { StyleSheet } from "react-native";

import { Box, InfoCardSkeleton } from "@/shared/infrastructure/components";

import uuid from "react-native-uuid";

export const InfoCardSkeletons = ({
  skeletonNumber
}: {
  skeletonNumber: number;
}) => {
  const items = new Array(skeletonNumber).fill("_");
  return (
    <Box style={styles.container}>
      {items.map((_) => (
        <Box key={`${uuid.v4()}${_}`}>
          <InfoCardSkeleton />
        </Box>
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 16
  },
});
