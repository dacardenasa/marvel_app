import React, { useContext, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import { Box, CustomButton, TextField, Typography } from "@/components";
import { SearchContext } from "@/app/(tabs)/context/search.context";

const _CharactersForm = ({
  handleFetchCharacters
}: {
  handleFetchCharacters: () => void;
}) => {
  const { handleChangeCharactersValue, charactersValue } = useContext(SearchContext);
  return (
    <Box style={styles.container}>
      <Box
        darkColor="transparent"
        lightColor="transparent"
        style={styles.textfieldBox}
      >
        <Typography type="subtitle" lightColor="#E53034" darkColor="#E53034">
          Character name:{" "}
        </Typography>
        <TextField
          value={charactersValue}
          onChangeText={handleChangeCharactersValue}
          placeholder="Character name starts with..."
        />
      </Box>
      <CustomButton
        disabled={!charactersValue}
        label="Search Characters"
        onPress={handleFetchCharacters}
      />
    </Box>
  );
};

export const CharactersForm = React.memo(_CharactersForm);

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    rowGap: 16
  },
  textfieldBox: { width: "100%", rowGap: 8 }
});
