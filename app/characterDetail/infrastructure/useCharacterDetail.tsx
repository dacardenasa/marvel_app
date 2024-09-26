import React from "react";
import { Pressable } from "react-native";
import { Image } from "expo-image";

import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import { QueryKey, useQuery } from "@tanstack/react-query";
import { Typography } from "@/shared/infrastructure/components";

import { createAxiosRepository } from "./axios.repository";
import { createCharacterDetailByIdService } from "../application/characterDetail";
import { createComicsByIdService } from "../application/comicsByCharacterId";
import { ComicAdapter } from "../domain/comic";

const repository = createAxiosRepository();
const detailByCharacterIdService = createCharacterDetailByIdService(repository);
const comicsByCharacterIdService = createComicsByIdService(repository);

export const useCharacterDetail = () => {
  const { id } = useLocalSearchParams();

  const {
    isLoading,
    data: character,
    error,
    refetch
  } = useQuery({
    queryKey: ["characterDetail", id],
    queryFn: ({ queryKey }: { queryKey: QueryKey }) => {
      const { 1: id } = queryKey;
      return detailByCharacterIdService.getDetailByCharacterId(id as number);
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
    queryFn: ({ queryKey }: { queryKey: QueryKey }) => {
      const { 1: id } = queryKey;
      return comicsByCharacterIdService.getComicsByCharacterId(id as number);
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
      <Typography
        numberOfLines={1}
        style={{ textAlign: "center", marginTop: 8 }}
      >
        {item.title}
      </Typography>
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
