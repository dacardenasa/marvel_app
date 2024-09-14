import React from "react";

import uuid from "react-native-uuid";

import { SkeletonBox, Typography } from "@/components";

const _ComicInfoSkeleton = () => {
  return (
    <>
      <Typography type="title" style={{ color: "red" }}>Synopsis</Typography>
      {[1, 2, 3, 4, 5].map((_) => (
        <SkeletonBox
          key={uuid.v4().toString()}
          width="100%"
          height={15}
          borderRadius={8}
        />
      ))}
      <SkeletonBox width="90%" height={15} borderRadius={8} />
      <Typography type="subtitle" style={{ color: "red" }}>
        Format:{" "}
        <SkeletonBox
          width={100}
          height={15}
          marginBottom={4}
          borderRadius={8}
        />
      </Typography>
      <Typography type="subtitle" style={{ color: "red" }}>
        Pages number:{" "}
        <SkeletonBox width={50} height={15} marginBottom={4} borderRadius={8} />
      </Typography>
    </>
  );
};

export const ComicInfoSkeleton = React.memo(_ComicInfoSkeleton);
