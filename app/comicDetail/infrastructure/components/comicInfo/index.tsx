import React from "react";

import { Typography } from "@/shared/infrastructure/components";
import { ComicDetailAdapter } from "@/app/comicDetail/domain/comicDetail";

type ComicInfoProps = Pick<
  ComicDetailAdapter,
  "synopsis" | "format" | "pageCount"
>;

const _ComicInfo = ({ synopsis, format, pageCount }: ComicInfoProps) => {
  return (
    <>
      <Typography type="title" style={{ color: "#E53034" }}>Synopsis</Typography>
      <Typography>{synopsis}</Typography>
      <Typography type="subtitle" style={{ color: "#E53034" }}>
        Format: <Typography>{format}</Typography>
      </Typography>
      <Typography type="subtitle" style={{ color: "#E53034" }}>
        Pages number: <Typography>{pageCount}</Typography>
      </Typography>
    </>
  );
};

export const ComicInfo = React.memo(_ComicInfo);
