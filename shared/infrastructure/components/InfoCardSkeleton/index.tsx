import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "../Box";
import { SkeletonBox } from "../SkeletonBox";

export const InfoCardSkeleton = () => {
  return (
    <Box style={styles.container}>
      <SkeletonBox width="45%" height="100%" borderRadius={8} />
      <Box style={styles.info}>
        <SkeletonBox width="90%" borderRadius={8} height={20} />
        <SkeletonBox width="50%" borderRadius={8} height={20} />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: { width: 140, height: 55, flexDirection: "row", columnGap: 16 },
  info: { width: "45%", justifyContent: "space-around" }
});
