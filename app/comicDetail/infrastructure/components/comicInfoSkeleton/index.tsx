import React from "react";

import uuid from "react-native-uuid";

import { SkeletonBox, Typography } from "@/shared/infrastructure/components";

const _ComicInfoSkeleton = () => {
  return (
    <>
      <Typography type="title" style={{ color: "#E53034" }}>Synopsis</Typography>
      {[1, 2, 3, 4, 5].map((_) => (
        <SkeletonBox
          key={`${uuid.v4()}${_}`}
          width="100%"
          height={15}
          borderRadius={8}
        />
      ))}
      <SkeletonBox width="90%" height={15} borderRadius={8} />
      <Typography type="subtitle" style={{ color: "#E53034" }}>
        Format:{" "}
        <SkeletonBox
          width={100}
          height={15}
          marginBottom={4}
          borderRadius={8}
        />
      </Typography>
      <Typography type="subtitle" style={{ color: "#E53034" }}>
        Pages number:{" "}
        <SkeletonBox width={50} height={15} marginBottom={4} borderRadius={8} />
      </Typography>
    </>
  );
};

export const ComicInfoSkeleton = React.memo(_ComicInfoSkeleton);
