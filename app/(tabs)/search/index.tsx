import React from "react";
import { FlatList, StyleSheet } from "react-native";

import {
  Box,
  Container,
  CustomTabs,
  ListEmpty
} from "@/shared/infrastructure/components";

import {
  ComicCardsSkeleton,
  SearchButtons,
  SearchModal
} from "./infrastructure/components";
import { useSearch } from "./infrastructure/useSearch";
import { SearchCategories, SearchTabs } from "./domain/search";

export default function Search() {
  const {
    fetchMoreCharactersData,
    fetchMoreDataComics,
    handleFetchCharacters,
    handleFetchComics,
    handleSearchBy,
    handleToggleModal,
    keyExtractorCharacters,
    keyExtractorComic,
    renderCharacterItem,
    renderComicItem,
    characters,
    comics,
    isFetchingOrLoadingCharacters,
    isFetchingOrLoadingComics,
    isOpenModal,
    searchBy
  } = useSearch();

  return (
    <Container style={styles.container}>
      <SearchButtons
        handlePressCharactersButton={() => {
          handleSearchBy(SearchCategories.characters);
          handleToggleModal();
        }}
        handlePressComicsButton={() => {
          handleSearchBy(SearchCategories.comics);
          handleToggleModal();
        }}
      />
      <CustomTabs<SearchTabs>
        activeTab={searchBy}
        tabs={{
          comics: SearchCategories.comics,
          characters: SearchCategories.characters
        }}
        renderScene={{
          comics: {
            render: (
              <FlatList
                columnWrapperStyle={styles.columnBox}
                data={comics}
                renderItem={renderComicItem}
                onEndReachedThreshold={0.5}
                onEndReached={fetchMoreDataComics}
                keyExtractor={keyExtractorComic}
                ListEmptyComponent={
                  isFetchingOrLoadingComics ? null : (
                    <ListEmpty description="No comics yet" />
                  )
                }
                ListFooterComponent={
                  isFetchingOrLoadingComics ? (
                    <ComicCardsSkeleton skeletonNumber={8} />
                  ) : (
                    <Box style={{ height: 600 }} />
                  )
                }
                numColumns={2}
              />
            )
          },
          characters: {
            render: (
              <FlatList
                columnWrapperStyle={styles.columnBox}
                data={characters}
                renderItem={renderCharacterItem}
                onEndReachedThreshold={0.5}
                onEndReached={fetchMoreCharactersData}
                keyExtractor={keyExtractorCharacters}
                ListEmptyComponent={
                  isFetchingOrLoadingCharacters ? null : (
                    <ListEmpty description="No characters yet" />
                  )
                }
                ListFooterComponent={
                  isFetchingOrLoadingCharacters ? (
                    <ComicCardsSkeleton skeletonNumber={8} />
                  ) : (
                    <Box style={{ height: 600 }} />
                  )
                }
                numColumns={2}
              />
            )
          }
        }}
      />
      <SearchModal
        isVisible={isOpenModal}
        closeModal={handleToggleModal}
        type={searchBy}
        handleFetch={
          searchBy === "comics" ? handleFetchComics : handleFetchCharacters
        }
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, rowGap: 16 },
  columnBox: {
    flex: 1,
    justifyContent: "space-between"
  }
});
