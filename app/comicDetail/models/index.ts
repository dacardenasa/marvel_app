import { CreatorsItem, Format, Price } from "@/models";

export type ComicDetailAdapter = {
  title: string;
  synopsis: string;
  thumbnail: string;
  format: Format | 'Unknown';
  pageCount: number | string;
  prices: Price[];
  creators: CreatorsItem[];
  comicImages: string[];
};

export type CharacterAdapter = {
  id: number;
  name: string;
  thumbnail: string;
}
