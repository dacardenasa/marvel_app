import React, { useCallback, useContext, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

import { QueryKey, useInfiniteQuery } from "@tanstack/react-query";

import { Box, ComicCard, Typography } from "@/shared/infrastructure/components";

import { createAxiosRepository } from "./infrastructure/axios.repository";
import { createComicsService } from "./application/comics";
import { createCharactersService } from "./application/characters";
import { SearchBy, SearchCategories } from "./domain/search";
import { SearchContext } from "../infrastructure/context/search.context";
import { apiToComics } from "./infrastructure/adapters/apiToComics.adapter";
import { apiToCharacters } from "./infrastructure/adapters/apiToCharacters.adapter";
import { MarvelCharacter } from "./domain/character";
import { MarvelComic } from "./domain/comic";

const repository = createAxiosRepository();
const comicsService = createComicsService(repository);
const charactersService = createCharactersService(repository);

export const useSearch = () => {
  const [searchBy, setSearchBy] = useState<SearchBy>(SearchCategories.comics);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { charactersValue, comicsValue } = useContext(SearchContext);

  const handleSearchBy = useCallback((searchType: SearchBy) => {
    setSearchBy(searchType);
  }, []);

  const handleToggleModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, []);

  const {
    data: comicsData,
    refetch: refetchComics,
    fetchNextPage: fetchNextPageComics,
    hasNextPage: hasNextPageComics,
    isLoading: isLoadingComics,
    isFetchingNextPage: isFetchingNextPageComics
  } = useInfiniteQuery({
    queryKey: ["search-infiniteComics", comicsValue],
    queryFn: ({
      pageParam = 0,
      queryKey
    }: {
      pageParam: number;
      queryKey: QueryKey;
    }) => {
      const [, titleStartsWith] = queryKey;
      return comicsService.getComics(pageParam, titleStartsWith as string);
    },
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

  const {
    data: charactersData,
    refetch: refetchCharacters,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["search-characters", charactersValue],
    queryFn: ({
      pageParam = 0,
      queryKey
    }: {
      pageParam: number;
      queryKey: QueryKey;
    }) => {
      const [, nameStartsWith] = queryKey;
      return charactersService.getCharacters(
        pageParam,
        nameStartsWith as string
      );
    },
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

  const renderCharacterItem = ({ item }: { item: MarvelCharacter }) => (
    <Box style={styles.halfBox}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/characterDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography
            lightColor="white"
            darkColor="white"
            numberOfLines={1}
            type="subtitle"
          >
            {item.name}
          </Typography>
          <Typography lightColor="white" darkColor="white" numberOfLines={1}>
            {item.description}
          </Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractorCharacters = (item: MarvelCharacter) => item.id.toString();

  const fetchMoreCharactersData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  const renderComicItem = ({ item }: { item: MarvelComic }) => (
    <Box style={styles.halfBox}>
      <ComicCard
        id={item.id}
        thumbnail={item.thumbnail}
        handlePressCard={() => router.push(`/comicDetail/${item.id}`)}
      >
        <Box style={styles.informationBox}>
          <Typography
            lightColor="white"
            darkColor="white"
            numberOfLines={1}
            type="subtitle"
          >
            {item.title}
          </Typography>
          <Typography lightColor="white" darkColor="white" numberOfLines={1}>
            {item.description}
          </Typography>
        </Box>
      </ComicCard>
    </Box>
  );

  const keyExtractorComic = (item: MarvelComic) => item.id.toString();

  const fetchMoreDataComics = () => {
    if (hasNextPageComics && !isFetchingNextPageComics) fetchNextPageComics();
  };

  const isFetchingOrLoadingCharacters = useMemo(
    () => isFetchingNextPage || isLoading,
    [isFetchingNextPage, isLoading]
  );

  const isFetchingOrLoadingComics = useMemo(
    () => isFetchingNextPageComics || isLoadingComics,
    [isFetchingNextPageComics, isLoadingComics]
  );

  return {
    fetchMoreCharactersData,
    fetchMoreDataComics,
    handleSearchBy,
    handleToggleModal,
    keyExtractorCharacters,
    keyExtractorComic,
    refetchCharacters,
    refetchComics,
    renderCharacterItem,
    renderComicItem,
    characters: charactersData?.flat() ?? [],
    comics: comicsData?.flat() ?? [],
    isFetchingOrLoadingCharacters,
    isFetchingOrLoadingComics,
    isOpenModal,
    searchBy
  };
};

const styles = StyleSheet.create({
  informationBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#E53034",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  columnBox: {
    flex: 1,
    justifyContent: "space-between"
  },
  halfBox: { width: "48%" }
});
