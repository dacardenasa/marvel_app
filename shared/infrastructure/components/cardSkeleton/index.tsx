import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "../Box";
import { SkeletonBox } from "../SkeletonBox";

export const CardSkeleton = () => {
  return (
    <Box style={styles.container}>
      <SkeletonBox
        width="100%"
        height={300}
        borderRadius={4}
        marginBottom={8}
      />
      <SkeletonBox width="50%" height={8} borderRadius={4} marginBottom={8} />
      <SkeletonBox width="80%" height={8} borderRadius={4} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    padding: 8
  }
});
