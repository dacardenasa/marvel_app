import React from "react";

import uuid from "react-native-uuid";

import { SkeletonBox, Typography } from "@/shared/infrastructure/components";

const _CharacterInfoSkeleton = () => {
  return (
    <>
      <Typography type="title" style={{ color: "#E53034" }}>Character name:</Typography>
      <SkeletonBox width="100%" height={15} borderRadius={8} />
      <Typography type="title" style={{ color: "#E53034" }}>Bio:</Typography>
      {[1, 2, 3, 4, 5].map((_) => (
        <SkeletonBox
          key={`${uuid.v4()}${_}`}
          width="100%"
          height={15}
          borderRadius={8}
        />
      ))}
      <SkeletonBox width="90%" height={15} borderRadius={8} />
    </>
  );
};

export const CharacterInfoSkeleton = React.memo(_CharacterInfoSkeleton);
