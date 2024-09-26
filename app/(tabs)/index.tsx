import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useNavigation } from "expo-router";
import { Image } from "expo-image";

import {
  Box,
  ListEmpty,
  ParallaxScrollView,
  Typography
} from "@/shared/infrastructure/components";
import marvelBgIcon from "@/assets/images/marvel-background.png";

import { ListCardSkeleton, WatchMoreCard } from "./infrastructure/components";
import { useHome } from "./useHome";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { CreateBottomTabNavigatorParams } from "./_layout";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<CreateBottomTabNavigatorParams>>();
  const {
    characters,
    data,
    isFetching,
    isFetchingCharacters,
    keyExtractor,
    renderItem,
    keyCharacterExtractor,
    renderCharacterItem
  } = useHome();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "black", dark: "white" }}
      headerImage={
        <Image
          source={marvelBgIcon}
          style={StyleSheet.absoluteFillObject}
          placeholder="marvel-background"
          contentFit="scale-down"
          transition={1000}
        />
      }
    >
      <Box style={{ marginBottom: 8 }}>
        <Typography type="title" style={{ fontFamily: "Star-Shield" }}>
          Welcome to
        </Typography>
        <Typography type="title" style={{ color: "#E53034" }}>
          MARVEL COMICS
        </Typography>
      </Box>
      <Typography type="title" style={{ marginBottom: 8 }}>
        Last Week Comics:
      </Typography>
      <FlatList
        contentContainerStyle={{ columnGap: 16 }}
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={
          isFetching ? null : <ListEmpty description="No info" />
        }
        ListFooterComponent={
          isFetching && !data?.length ? (
            <ListCardSkeleton skeletonNumber={10} />
          ) : data?.length ? (
            <WatchMoreCard
              handlePressCard={() => navigation.navigate("comics")}
            />
          ) : null
        }
        horizontal
      />
      <Typography type="title" style={{ marginBottom: 8 }}>
        Characters:
      </Typography>
      <FlatList
        contentContainerStyle={{ columnGap: 16 }}
        data={characters}
        keyExtractor={keyCharacterExtractor}
        renderItem={renderCharacterItem}
        ListEmptyComponent={
          isFetchingCharacters ? null : <ListEmpty description="No info" />
        }
        ListFooterComponent={
          isFetchingCharacters && !characters?.length ? (
            <ListCardSkeleton skeletonNumber={10} />
          ) : characters?.length ? (
            <WatchMoreCard
              handlePressCard={() => navigation.navigate("characters")}
            />
          ) : null
        }
        horizontal
      />
      <Box style={styles.separator} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  separator: { height: 100 }
});
