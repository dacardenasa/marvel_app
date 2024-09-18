import React from "react";

import { Box, IconButton, Typography } from "@/components";
import { StyleSheet } from "react-native";
import { ICONS_URI } from "@/constants/global";

type SearchButtonsProps = {
  handlePressComicsButton: () => void;
  handlePressCharactersButton: () => void;
};

const _SearchButtons = ({
  handlePressCharactersButton,
  handlePressComicsButton
}: SearchButtonsProps) => {
  return (
    <Box style={styles.container}>
      <Typography type="title">Search by:</Typography>
      <Box style={styles.buttonsBox}>
        <Box style={styles.buttonBox}>
          <IconButton
            label="Comics"
            sourceIcon={ICONS_URI.comics}
            onPress={handlePressComicsButton}
          />
        </Box>
        <Box style={styles.buttonBox}>
          <IconButton
            label="Characters"
            sourceIcon={ICONS_URI.characters}
            onPress={handlePressCharactersButton}
          />
        </Box>
      </Box>
    </Box>
  );
};

export const SearchButtons = React.memo(_SearchButtons);

const styles = StyleSheet.create({
  container: { padding: 16, rowGap: 16 },
  buttonsBox: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row"
  },
  buttonBox: { width: "45%" }
});
