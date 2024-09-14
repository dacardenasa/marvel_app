import React from "react";
import { FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { Image } from "expo-image";

import AntDesign from "@expo/vector-icons/AntDesign";

import {
  Box,
  Container,
  ListEmpty,
  ParallaxScrollView,
  Typography
} from "@/components";

import { useCharacterDetail } from "./useCharacterDetail";
import { CharacterInfoSkeleton, ThumbnailsSkeletons } from "./components";

const CharacterDetail = () => {
  const navigation = useNavigation();
  const {
    character,
    comics,
    comicsError,
    error,
    isLoading,
    isLoadingComicsByCharacter,
    keyExtractor,
    renderComicItem
  } = useCharacterDetail();

  if (error || comicsError) {
    return (
      <Container style={styles.container}>
        <Typography type="title" style={{ color: "#E53034" }}>
          {error?.message ?? comicsError?.message ?? "Undefined error!"}
        </Typography>
      </Container>
    );
  }

  return (
    <Box style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={character?.thumbnail}
            style={StyleSheet.absoluteFillObject}
          />
        }
        customContentIntoImage={
          <Pressable
            style={styles.backButtonBox}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={60} color="white" />
          </Pressable>
        }
      >
        {isLoading ? (
          <CharacterInfoSkeleton />
        ) : (
          <>
            <Box style={{ columnGap: 8 }}>
              <Typography type="title" style={{ color: "#E53034" }}>Character name:</Typography>
              <Typography>{character?.name}</Typography>
            </Box>
            <Box style={{ columnGap: 8 }}>
              <Typography type="title" style={{ color: "#E53034" }}>Bio:</Typography>
              <Typography>{character?.description}</Typography>
            </Box>
          </>
        )}
        <Typography type="title" style={{ color: "#E53034" }}>Comics:</Typography>
        <FlatList
          contentContainerStyle={{ columnGap: 16 }}
          data={comics}
          keyExtractor={keyExtractor}
          renderItem={renderComicItem}
          ListEmptyComponent={
            isLoadingComicsByCharacter ? (
              <></>
            ) : (
              <ListEmpty description="No previews comic" />
            )
          }
          ListFooterComponent={
            isLoadingComicsByCharacter ? (
              <ThumbnailsSkeletons skeletonNumber={10} />
            ) : (
              <></>
            )
          }
          horizontal
        />
      </ParallaxScrollView>
    </Box>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    padding: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonBox: {
    position: "absolute",
    top: 0,
    left: 16,
    zIndex: 1000,
    backgroundColor: "transparent"
  }
});
