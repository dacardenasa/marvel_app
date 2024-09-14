import { Box, ListEmpty, ParallaxScrollView, Typography } from "@/components";
import { StyleSheet, FlatList } from "react-native";
import { useHome } from "./useHome";
import { router } from "expo-router";
import { ListCardSkeleton, WatchMoreCard } from "./components";
import { Image } from "expo-image";

export default function HomeScreen() {
  const {
    characters,
    data,
    error,
    isFetching,
    isFetchingCharacters,
    keyExtractor,
    renderItem,
    keyCharacterExtractor,
    renderCharacterItem
  } = useHome();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/marvel-background.png")}
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
        <Typography type="title" style={{ color: "#E62429" }}>
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
          ) : (
            <WatchMoreCard handlePressCard={() => router.push("/comics")} />
          )
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
          ) : (
            <WatchMoreCard handlePressCard={() => router.push("/characters")} />
          )
        }
        horizontal
      />
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
  }
});
