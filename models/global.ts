export enum Extension {
  GIF = "gif",
  Jpg = "jpg"
}

export enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
  Promo = "promo"
}

export type StoriesItem = {
  resourceURI: string;
  name: string;
  type: ItemType;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
};

export type Thumbnail = {
  path: string;
  extension: Extension;
};

export type URL = {
  type: URLType;
  url: string;
}

export enum URLType {
  Detail = "detail",
  InAppLink = "inAppLink",
  Purchase = "purchase",
  Reader = "reader"
}
