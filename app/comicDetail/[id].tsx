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

import {
  ComicInfo,
  ComicInfoSkeleton,
  InfoCardSkeletons,
  ThumbnailsSkeletons
} from "./components";
import { useComicDetail } from "./useComicDetail";

const ComicModal = React.lazy(() => import("./components/comicModal"));

const ComicDetail = () => {
  const navigation = useNavigation();
  const {
    characters,
    charactersError,
    comicURI,
    data,
    error,
    isLoadingCharacters,
    isLoading,
    isModalOpen,
    closeModal,
    renderCharacterImageItem,
    renderComicImageItem,
    renderCreatorItem,
    renderPriceItem
  } = useComicDetail();

  if (error || charactersError) {
    return (
      <Container style={styles.container}>
        <Typography type="title" style={{ color: "red" }}>
          {error?.message ?? charactersError?.message}
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
            source={data?.thumbnail}
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
          <ComicInfoSkeleton />
        ) : (
          <>
            <Typography type="title" style={{ color: "#E53034" }}>{data?.title}</Typography>
            <ComicInfo
              pageCount={data?.pageCount ?? "Unknown"}
              synopsis={data?.synopsis ?? ""}
              format={data?.format ?? "Unknown"}
            />
          </>
        )}
        <Typography type="subtitle" style={{ color: "#E53034" }}>Comic prices:</Typography>
        <FlatList
          contentContainerStyle={{ columnGap: 16 }}
          data={data?.prices}
          keyExtractor={(item) => item.type}
          renderItem={renderPriceItem}
          ListEmptyComponent={
            !isLoading ? <ListEmpty description="No prices info" /> : <></>
          }
          ListFooterComponent={
            isLoading ? <InfoCardSkeletons skeletonNumber={10} /> : <></>
          }
          horizontal
        />
        <Typography type="subtitle" style={{ color: "#E53034" }}>Comic creators:</Typography>
        <FlatList
          contentContainerStyle={{ columnGap: 16 }}
          data={data?.creators}
          keyExtractor={(item) => item.name}
          renderItem={renderCreatorItem}
          ListEmptyComponent={
            !isLoading ? <ListEmpty description="No creators info" /> : <></>
          }
          ListFooterComponent={
            isLoading ? <InfoCardSkeletons skeletonNumber={10} /> : <></>
          }
          horizontal
        />
        <Typography type="subtitle" style={{ color: "#E53034" }}>Comic Preview:</Typography>
        <FlatList
          contentContainerStyle={{ columnGap: 16 }}
          data={data?.comicImages}
          keyExtractor={(item) => item}
          renderItem={renderComicImageItem}
          ListEmptyComponent={
            !isLoading ? <ListEmpty description="No previews comic" /> : <></>
          }
          ListFooterComponent={
            isLoading ? <ThumbnailsSkeletons skeletonNumber={10} /> : <></>
          }
          horizontal
        />
        <Typography type="subtitle" style={{ color: "#E53034" }}>Characters:</Typography>
        <FlatList
          contentContainerStyle={{ columnGap: 16 }}
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCharacterImageItem}
          ListEmptyComponent={
            isLoadingCharacters ? (
              <></>
            ) : (
              <ListEmpty description="No characters found" />
            )
          }
          ListFooterComponent={
            isLoadingCharacters ? (
              <ThumbnailsSkeletons skeletonNumber={10} />
            ) : (
              <></>
            )
          }
          horizontal
        />
      </ParallaxScrollView>
      <React.Suspense>
        <ComicModal
          isVisible={isModalOpen}
          source={comicURI ?? ""}
          closeModal={closeModal}
        />
      </React.Suspense>
    </Box>
  );
};

export default ComicDetail;

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
