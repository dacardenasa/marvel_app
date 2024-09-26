import React from "react";
import { StyleSheet } from "react-native";

import { Box, CustomModal } from "@/shared/infrastructure/components";

import { ComicsForm } from "../ComicsForm";
import { CharactersForm } from "../CharactersForm";
import { SearchBy } from "../../../domain/search";

type SearchModalProps = {
  isVisible: boolean;
  type: SearchBy;
  closeModal: () => void;
  handleFetch: () => void;
};

const _SearchModal = ({
  isVisible,
  type,
  closeModal,
  handleFetch
}: SearchModalProps) => {
  return (
    <CustomModal closeModal={closeModal} isVisible={isVisible}>
      {type === "comics" && (
        <Box style={styles.backdropBox}>
          <ComicsForm handleFetchComics={handleFetch} />
        </Box>
      )}
      {type === "characters" && (
        <Box style={styles.backdropBox}>
          <CharactersForm handleFetchCharacters={handleFetch} />
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
