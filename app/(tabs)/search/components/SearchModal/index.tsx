import React from "react";
import { Box, CustomModal } from "@/components";
import { StyleSheet } from "react-native";
import { ComicsForm } from "../ComicsForm";
import { CharactersForm } from "../CharactersForm";

type SearchModalProps = {
  isVisible: boolean;
  closeModal: () => void;
} & (
  | { type: "comics"; handleFetchComics: () => void }
  | { type: "characters"; handleFetchCharacters: () => void }
);

const _SearchModal = (props: SearchModalProps) => {
  return (
    <CustomModal closeModal={props.closeModal} isVisible={props.isVisible}>
      {props.type === "comics" && (
        <Box style={styles.backdropBox}>
          <ComicsForm handleFetchComics={() => props.handleFetchComics()} />
        </Box>
      )}
      {props.type === "characters" && (
        <Box style={styles.backdropBox}>
          <CharactersForm handleFetchCharacters={() => props.handleFetchCharacters()} />
        </Box>
      )}
    </CustomModal>
  );
};

export const SearchModal = React.memo(_SearchModal);

const styles = StyleSheet.create({
  backdropBox: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, .8)",
    justifyContent: "center",
    alignItems: "center"
  }
});
