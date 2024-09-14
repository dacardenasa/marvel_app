import React from "react";

import { ComicDetailAdapter } from "../../models";
import { Typography } from "@/components";

type ComicInfoProps = Pick<
  ComicDetailAdapter,
  "synopsis" | "format" | "pageCount"
>;

const _ComicInfo = ({ synopsis, format, pageCount }: ComicInfoProps) => {
  return (
    <>
      <Typography type="title" style={{ color: "red" }}>Synopsis</Typography>
      <Typography>{synopsis}</Typography>
      <Typography type="subtitle" style={{ color: "red" }}>
        Format: <Typography>{format}</Typography>
      </Typography>
      <Typography type="subtitle" style={{ color: "red" }}>
        Pages number: <Typography>{pageCount}</Typography>
      </Typography>
    </>
  );
};

export const ComicInfo = React.memo(_ComicInfo);
