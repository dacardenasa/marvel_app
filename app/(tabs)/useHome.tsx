import React from "react";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";

import { Box, ComicCard, Typography } from "@/components";

import { homeAPI } from "./services";
import { HomeCharacterMapped, HomeComicsMaped } from "./models";
import { apiToHomeCharacters, apiToHomeComics } from "./adapters";

export const useHome = () => {
  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ["lastWeekComics"],
    queryFn: homeAPI.fetchLastWeekComics,
    select: (data) => {
      const charactersMapped = apiToHomeComics(data.results);
      return charactersMapped;
    },
    enabled: false
  });

  const {
    data: characters,
    error: charactersError,
    refetch: refetchCharacters,
    isFetching: isFetchingCharacters
  } = useQuery({
    queryKey: ["firstCharacters"],
    queryFn: homeAPI.fetchCharacters,
    select: (data) => {
      const charactersMapped = apiToHomeCharacters(data.results);
      return charactersMapped;
    },
    enabled: false
  });

  const renderItem = ({ item }: { item: HomeComicsMaped }) => (
    <Box style={{ width: 250 }}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/comicDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography numberOfLines={1} type="subtitle">{item.title}</Typography>
          <Box style={{ flexDirection: "row", backgroundColor: "transparent" }}>
            <Typography type="defaultSemiBold">Price: </Typography>
            <Typography>${item.price}</Typography>
          </Box>
        </Box>
      </ComicCard>
    </Box>
  );

  const renderCharacterItem = ({ item }: { item: HomeCharacterMapped }) => (
    <Box style={{ width: 250 }}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/characterDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography numberOfLines={1} type="subtitle">{item.name}</Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractor = (item: HomeComicsMaped) => item.id.toString();
  const keyCharacterExtractor = (item: HomeCharacterMapped) => item.id.toString();

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
