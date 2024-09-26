import { Stories, Thumbnail, URL } from "./global";

export type CharactersResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: CharactersData;
};

export type CharactersData = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
};

export type Comics = {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
};

export type ComicsItem = {
  resourceURI: string;
  name: string;
};
