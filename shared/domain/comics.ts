import { Stories, Thumbnail, URL } from "./global";

export interface ComicsResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: ComicsData;
}

export interface ComicsData {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: Description | null;
  modified: string;
  isbn: Isbn;
  upc: string;
  diamondCode: DiamondCode;
  ean: Ean;
  issn: string;
  format: Format;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: Series[];
  collections: Series[];
  collectedIssues: Series[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

export interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: Role;
}

export enum Role {
  Colorist = "colorist",
  Editor = "editor",
  Inker = "inker",
  Letterer = "letterer",
  Other = "other",
  Penciler = "penciler",
  Penciller = "penciller",
  PencillerCover = "penciller (cover)",
  Writer = "writer"
}

export interface DateElement {
  type: DateType;
  date: string;
}

export enum DateType {
  DigitalPurchaseDate = "digitalPurchaseDate",
  FocDate = "focDate",
  OnsaleDate = "onsaleDate",
  UnlimitedDate = "unlimitedDate"
}

export enum Description {
  Empty = "",
  NA = "#N/A"
}

export enum DiamondCode {
  Empty = "",
  Jul190068 = "JUL190068",
  Sep090507 = "SEP090507"
}

export enum Ean {
  Empty = "",
  The978078513621752499 = "9780785 136217 52499"
}

export enum Format {
  Comic = "Comic",
  Empty = "",
  Hardcover = "Hardcover",
  TradePaperback = "Trade Paperback"
}

export enum Isbn {
  Empty = "",
  The0785111298 = "0-7851-1129-8",
  The9780785136217 = "978-0-7851-3621-7"
}

export interface Price {
  type: PriceType;
  price: number;
}

export enum PriceType {
  DigitalPurchasePrice = "digitalPurchasePrice",
  PrintPrice = "printPrice"
}

export interface TextObject {
  type: TextObjectType;
  language: Language;
  text: string;
}

export enum Language {
  EnUs = "en-us"
}

export enum TextObjectType {
  IssueSolicitText = "issue_solicit_text"
}