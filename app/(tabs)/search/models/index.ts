import { Character } from "@/models";

export type CharacterMapped = Pick<Character, "id" | "name" | "description"> & {
  thumbnail: string;
};

export interface ComicMapped {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export type SearchBy = "comics" | "characters";

export type Tabs = { comics: "comics"; characters: "characters" };

export const enum SearchCategories {
  comics = "comics",
  characters = "characters"
}
