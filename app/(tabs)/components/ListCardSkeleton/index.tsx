import React from "react";

import { Box, CardSkeleton } from "@/components";

import uuid from "react-native-uuid";
import { StyleSheet } from "react-native";

type ListCardSkeletonProps = {
  skeletonNumber: number;
};

export const ListCardSkeleton = ({ skeletonNumber }: ListCardSkeletonProps) => {
  const items = new Array(skeletonNumber).fill("_");
  return (
    <Box style={styles.container}>
      {items.map((_) => (
        <Box key={uuid.v4().toString()} style={styles.cardBox}>
          <CardSkeleton />
        </Box>
      ))}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  cardBox: {
    width: 250
  }
});
