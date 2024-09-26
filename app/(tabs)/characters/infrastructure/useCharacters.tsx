import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

import { useInfiniteQuery } from "@tanstack/react-query";
import { Box, ComicCard, Typography } from "@/shared/infrastructure/components";

import { createAxiosRepository } from "./axios.repository";
import { createCharactersService } from "../application/characters";
import { apiToCharacters } from "./adapters/apiToCharacters.adapter";
import { MarvelCharacter } from "../domain/character";

const repository = createAxiosRepository();
const charactersService = createCharactersService(repository);

export const useCharacters = () => {
  const {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam = 0 }: { pageParam: number }) =>
      charactersService.getCharacters(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.offset < lastPage.total
        ? lastPage.offset + lastPage.limit
        : undefined;
    },
    select: (data) => {
      const commicsMapped = data.pages.map((page) =>
        apiToCharacters(page.results)
      );
      return commicsMapped;
    },
    enabled: false
  });

  const renderItem = ({ item }: { item: MarvelCharacter }) => (
    <Box style={{ width: "48%" }}>
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
          <Typography darkColor="white" lightColor="white" numberOfLines={1}>
            {item.description}
          </Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractor = (item: MarvelCharacter) => item.id.toString();

  const fetchMoreData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  return {
    data: data?.flat() ?? [],
    error,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    fetchMoreData,
    keyExtractor,
    renderItem
  };
};

const styles = StyleSheet.create({
  informationBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#E53034",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  }
});
