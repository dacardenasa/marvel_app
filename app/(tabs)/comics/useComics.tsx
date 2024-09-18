import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

import { useInfiniteQuery } from "@tanstack/react-query";

import { Box, ComicCard, Typography } from "@/components";

import { apiToComics } from "./adapters/apiToComics.adapter";
import { comicsAPI } from "./services/comics.api";
import { ComicMapped } from "./models";

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
    queryFn: comicsAPI.fetchInfiniteComics,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.offset + lastPage.limit,
    select: (data) => {
      const commicsMapped = data.pages.map((page) => apiToComics(page.results));
      return commicsMapped;
    },
    enabled: false
  });

  const renderItem = ({ item }: { item: ComicMapped }) => (
    <Box style={{ width: "48%" }}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/comicDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography darkColor="white" lightColor="white" numberOfLines={1} type="subtitle">{item.title}</Typography>
          <Typography darkColor="white" lightColor="white" numberOfLines={1}>{item.description}</Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractor = (item: ComicMapped) => item.id.toString();

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
