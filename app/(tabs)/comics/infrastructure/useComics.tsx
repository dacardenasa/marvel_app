import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

import { useInfiniteQuery } from "@tanstack/react-query";

import { Box, ComicCard, Typography } from "@/shared/infrastructure/components";

import { apiToComics } from "./adapters/apiToComics.adapter";
import { createAxiosRepository } from "./axios.repository";
import { createComicsService } from "../application/comics";
import { MarvelComic } from "../domain/comic";

const repository = createAxiosRepository();
const comicsService = createComicsService(repository);

export const useComics = () => {
  const {
    data,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["infiniteComics"],
    queryFn: ({ pageParam = 0 }: { pageParam: number }) =>
      comicsService.getComics(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.offset < lastPage.total
        ? lastPage.offset + lastPage.limit
        : undefined;
    },
    select: (data) => {
      const commicsMapped = data.pages.map((page) => apiToComics(page.results));
      return commicsMapped;
    },
    enabled: false
  });

  const renderItem = ({ item }: { item: MarvelComic }) => (
    <Box style={{ width: "48%" }}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/comicDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography
            darkColor="white"
            lightColor="white"
            numberOfLines={1}
            type="subtitle"
          >
            {item.title}
          </Typography>
          <Typography darkColor="white" lightColor="white" numberOfLines={1}>
            {item.description}
          </Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractor = (item: MarvelComic) => item.id.toString();

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
