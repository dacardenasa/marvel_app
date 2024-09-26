import React from "react";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";

import { Box, ComicCard, Typography } from "@/shared/infrastructure/components";

import { createAxiosRepository } from "./infrastructure/axios.repository";
import { createComicsService } from "./application/comics";
import { createCharactersService } from "./application/characters";
import { MarvelComic } from "./domain/comics";
import { MarvelCharacter } from "./domain/character";

const repository = createAxiosRepository();
const comicsService = createComicsService(repository);
const charactersService = createCharactersService(repository);

export const useHome = () => {
  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ["lastWeekComics"],
    queryFn: comicsService.geLastWeekComics,
    enabled: false
  });

  const {
    data: characters,
    error: charactersError,
    refetch: refetchCharacters,
    isFetching: isFetchingCharacters
  } = useQuery({
    queryKey: ["firstCharacters"],
    queryFn: charactersService.getCharacters,
    enabled: false
  });

  const renderItem = ({ item }: { item: MarvelComic }) => (
    <Box style={{ width: 250 }}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/comicDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography
            numberOfLines={1}
            type="subtitle"
            darkColor="white"
            lightColor="white"
          >
            {item.title}
          </Typography>
          <Box style={{ flexDirection: "row", backgroundColor: "transparent" }}>
            <Typography
              darkColor="white"
              lightColor="white"
              type="defaultSemiBold"
            >
              Price:{" "}
            </Typography>
            <Typography darkColor="white" lightColor="white">
              ${item.price}
            </Typography>
          </Box>
        </Box>
      </ComicCard>
    </Box>
  );

  const renderCharacterItem = ({ item }: { item: MarvelCharacter }) => (
    <Box style={{ width: 250 }}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/characterDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography
            darkColor="white"
            lightColor="white"
            numberOfLines={1}
            type="subtitle"
          >
            {item.name}
          </Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractor = (item: MarvelComic) => item.id.toString();
  const keyCharacterExtractor = (item: MarvelCharacter) => item.id.toString();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
      refetchCharacters();
    }, [])
  );

  return {
    data,
    characters,
    charactersError,
    error,
    isFetching,
    isFetchingCharacters,
    keyExtractor,
    keyCharacterExtractor,
    renderCharacterItem,
    renderItem
  };
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    borderRadius: 8,
    overflow: "hidden"
  },
  informationBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#E53034",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  }
});
