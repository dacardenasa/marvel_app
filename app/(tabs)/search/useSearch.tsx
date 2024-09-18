import { useContext, useMemo, useState } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

import { useInfiniteQuery } from "@tanstack/react-query";

import { Box, ComicCard, Typography } from "@/components";

import { SearchContext } from "../context/search.context";

import {
  CharacterMapped,
  ComicMapped,
  SearchBy,
  SearchCategories
} from "./models";
import { comicsAPI } from "./services/comics/comics.api";
import { apiToComics } from "./adapters/apiToComics.adapter";
import { charactersAPI } from "./services/characters/characters.api";
import { apiToCharacters } from "./adapters/apiToCharacters.adapter";

export const useSearch = () => {
  const [searchBy, setSearchBy] = useState<SearchBy>(SearchCategories.comics);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { charactersValue, comicsValue } = useContext(SearchContext);

  const handleSearchBy = (searchType: SearchBy) => {
    setSearchBy(searchType);
  };

  const handleToggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const {
    data: comicsData,
    refetch: refetchComics,
    fetchNextPage: fetchNextPageComics,
    hasNextPage: hasNextPageComics,
    isLoading: isLoadingComics,
    isFetchingNextPage: isFetchingNextPageComics
  } = useInfiniteQuery({
    queryKey: ["search-infiniteComics", comicsValue],
    queryFn: comicsAPI.fetchInfiniteComics,
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
    queryFn: charactersAPI.fetchInfiniteCharacters,
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

  const renderCharacterItem = ({ item }: { item: CharacterMapped }) => (
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

  const keyExtractorCharacters = (item: CharacterMapped) => item.id.toString();

  const fetchMoreCharactersData = () => {
    if (hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  const renderComicItem = ({ item }: { item: ComicMapped }) => (
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

  const keyExtractorComic = (item: ComicMapped) => item.id.toString();

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
