import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Box, Container, CustomTabs, ListEmpty } from "@/components";

import { ComicCardsSkeleton, SearchButtons, SearchModal } from "./components";
import { useSearch } from "./useSearch";
import { SearchCategories, Tabs } from "./models";

export default function Search() {
  const {
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
      <CustomTabs<Tabs>
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
      {isOpenModal && searchBy === SearchCategories.comics && (
        <SearchModal
          isVisible={isOpenModal}
          closeModal={handleToggleModal}
          type={searchBy}
          handleFetchComics={() => {
            refetchComics();
            handleToggleModal();
          }}
        />
      )}
      {isOpenModal && searchBy === SearchCategories.characters && (
        <SearchModal
          isVisible={isOpenModal}
          closeModal={handleToggleModal}
          type={searchBy}
          handleFetchCharacters={() => {
            refetchCharacters();
            handleToggleModal();
          }}
        />
      )}
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
