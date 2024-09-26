import React from 'react';
import { Box, SkeletonBox } from "@/shared/infrastructure/components";

import uuid from "react-native-uuid";

export const ThumbnailsSkeletons = ({
  skeletonNumber
}: {
  skeletonNumber: number;
}) => {
  const items = new Array(skeletonNumber).fill("_");
  return (
    <Box style={{ flexDirection: "row", columnGap: 16 }}>
      {items.map((_) => (
        <SkeletonBox
          key={`${uuid.v4()}${_}`}
          width={64}
          height={80}
          borderRadius={8}
        />
      ))}
    </Box>
  );
};
