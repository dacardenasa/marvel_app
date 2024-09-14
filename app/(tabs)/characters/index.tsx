import React from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";

import { Container, ErrorView } from "@/components";

import { useCharacters } from "./useCharacters";
import { ComicCardsSkeleton } from "./components";

const Characters = () => {
  const {
    data,
    error,
    isFetchingNextPage,
    isLoading,
    fetchMoreData,
    keyExtractor,
    renderItem
  } = useCharacters();

  if (error) {
    return <ErrorView message={error.message} />;
  }

  if (isLoading) {
    return (
      <ScrollView>
        <ComicCardsSkeleton skeletonNumber={8} />
      </ScrollView>
    );
  }

  return (
    <Container>
      <FlatList
        columnWrapperStyle={styles.columnBox}
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={fetchMoreData}
        keyExtractor={keyExtractor}
        ListFooterComponent={
          isFetchingNextPage ? <ComicCardsSkeleton skeletonNumber={8} /> : null
        }
        numColumns={2}
      />
    </Container>
  );
};

export default Characters;

const styles = StyleSheet.create({
  columnBox: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 8
  }
});
