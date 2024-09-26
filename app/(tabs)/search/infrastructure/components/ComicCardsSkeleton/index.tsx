import React from "react";
import { StyleSheet } from "react-native";

import uuid from "react-native-uuid";

import { Box, CardSkeleton, Container } from "@/shared/infrastructure/components";

type ComicCardsSkeletonProps = {
  skeletonNumber: number;
};

const _ComicCardsSkeleton = ({ skeletonNumber }: ComicCardsSkeletonProps) => {
  const list = new Array(skeletonNumber).fill("_");
  return (
    <Container style={styles.container}>
      {list.map((_) => (
        <Box key={`${uuid.v4()}${_}`} style={{ width: "48%" }}>
          <CardSkeleton />
        </Box>
      ))}
    </Container>
  );
};

export const ComicCardsSkeleton = React.memo(_ComicCardsSkeleton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});
