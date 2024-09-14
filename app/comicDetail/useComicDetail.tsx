import React, { useState } from "react";
import { Pressable } from "react-native";

import { Image } from "expo-image";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";

import { useQuery } from "@tanstack/react-query";

import { CreatorsItem, Price } from "@/models";

import { comicDetailAPI } from "./services/comicDetail.api";
import { apiToComicDetail } from "./adapters/apiToComicDetail.adapter";
import { CreatorCard, PriceCard } from "./components";
import { apiToCharacters } from "./adapters/apiToCharacter.adapter";
import { CharacterAdapter } from "./models";
import { Typography } from "@/components";

export const useComicDetail = () => {
  const { id } = useLocalSearchParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [comicURI, setComicURI] = useState<string | null>(null);

  const openModal = (comicURI: string) => {
    setIsModalOpen(true);
    setComicURI(comicURI);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setComicURI(null);
  };

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["comicDetail", id],
    queryFn: comicDetailAPI.fetchComicsDetail,
    select: (data) => {
      const [comicMapped] = apiToComicDetail(data.results);
      return comicMapped;
    },
    enabled: false
  });

  const {
    isLoading: isLoadingCharacters,
    data: characters,
    error: charactersError,
    refetch: refetchCharacters
  } = useQuery({
    queryKey: ["charactersByComicId", id],
    queryFn: comicDetailAPI.fetchCharactersByComicId,
    select: (data) => {
      const characters = apiToCharacters(data.results);
      return characters;
    },
    enabled: false
  });

  const renderPriceItem = ({ item }: { item: Price }) => (
    <PriceCard type={item.type} price={item.price} />
  );

  const renderCreatorItem = ({ item }: { item: CreatorsItem }) => (
    <CreatorCard name={item.name} role={item.role} />
  );

  const renderComicImageItem = ({ item }: { item: string }) => (
    <Pressable onPress={() => openModal(item)}>
      <Image
        source={item}
        placeholder={item}
        transition={1000}
        style={{ width: 64, height: 80, borderRadius: 8 }}
      />
    </Pressable>
  );

  const renderCharacterImageItem = ({ item }: { item: CharacterAdapter }) => (
    <Pressable
      style={{
        flexDirection: "row",
        columnGap: 16,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
      onPress={() => router.push(`/characterDetail/${item.id}`)}
    >
      <Image
        source={item.thumbnail}
        placeholder={item.name}
        transition={1000}
        style={{ width: 64, height: 80, borderRadius: 8 }}
      />
      <Typography numberOfLines={2}>{item.name}</Typography>
    </Pressable>
  );

  useFocusEffect(
    React.useCallback(() => {
      refetch();
      refetchCharacters();
    }, [])
  );

  return {
    characters,
    charactersError,
    comicURI,
    data,
    error,
    isLoading,
    isLoadingCharacters,
    isModalOpen,
    closeModal,
    renderCharacterImageItem,
    renderComicImageItem,
    renderCreatorItem,
    renderPriceItem
  };
};
