import { CreatorsItem, Format, Price } from "@/shared/domain";

export type ComicDetailAdapter = {
  title: string;
  synopsis: string;
  thumbnail: string;
  format: Format | "Unknown";
  pageCount: number | string;
  prices: Price[];
  creators: CreatorsItem[];
  comicImages: string[];
};
