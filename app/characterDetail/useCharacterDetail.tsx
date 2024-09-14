import React from "react";

import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import { useQuery } from "@tanstack/react-query";

import { characterDetailAPI } from "./services";
import { apiToCharacter, apiToComics } from "./adapters";
import { ComicAdapter } from "./models";
import { Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Box, Typography } from "@/components";

export const useCharacterDetail = () => {
  const { id } = useLocalSearchParams();

  const {
    isLoading,
    data: character,
    error,
    refetch
  } = useQuery({
    queryKey: ["characterDetail", id],
    queryFn: characterDetailAPI.fetchCharacterDetail,
    select: (data) => {
      const [characterMapped] = apiToCharacter(data.results);
      return characterMapped;
    },
    enabled: false
  });

  const {
    isLoading: isLoadingComicsByCharacter,
    data: comics,
    error: comicsError,
    refetch: refetchComicsByCharacter
  } = useQuery({
    queryKey: ["comicsByCharacterId", id],
    queryFn: characterDetailAPI.fetchComicsByCharacterId,
    select: (data) => {
      const comics = apiToComics(data.results);
      return comics;
    },
    enabled: false
  });

  const renderComicItem = ({ item }: { item: ComicAdapter }) => (
    <Pressable
      style={{
        width: 200,
        height: 250,
        justifyContent: "center",
        alignItems: "center"
      }}
      onPress={() => router.push(`/comicDetail/${item.id}`)}
    >
      <Image
        source={item.thumbnail}
        placeholder={item.title}
        contentFit="scale-down"
        transition={1000}
        style={{ width: 150, height: 200, borderRadius: 16 }}
      />
      <Typography numberOfLines={1} style={{ textAlign: 'center', marginTop: 8 }}>{item.title}</Typography>
    </Pressable>
  );

  const keyExtractor = (item: ComicAdapter) => item.id.toString();

  useFocusEffect(
    React.useCallback(() => {
      refetch();
      refetchComicsByCharacter();
    }, [])
  );

  return {
    character,
    comics,
    comicsError,
    error,
    isLoading,
    isLoadingComicsByCharacter,
    keyExtractor,
    renderComicItem
  };
};
