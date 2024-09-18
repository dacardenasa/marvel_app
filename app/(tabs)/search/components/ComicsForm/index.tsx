import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Box, CustomButton, TextField, Typography } from "@/components";
import { SearchContext } from "@/app/(tabs)/context/search.context";

type ComicsFormProps = {
  handleFetchComics: () => void;
};

const _ComicsForm = ({ handleFetchComics }: ComicsFormProps) => {
  const { handleChangeComicsValue, comicsValue } = useContext(SearchContext);
  return (
    <Box style={styles.container}>
      <Box
        darkColor="transparent"
        lightColor="transparent"
        style={styles.textfieldBox}
      >
        <Typography type="subtitle" lightColor="#E53034" darkColor="#E53034">
          Comic Name:{" "}
        </Typography>
        <TextField
          value={comicsValue}
          onChangeText={handleChangeComicsValue}
          placeholder="Comic name starts with..."
        />
      </Box>
      <CustomButton
        disabled={!comicsValue}
        label="Search Comics"
        onPress={handleFetchComics}
      />
    </Box>
  );
};

export const ComicsForm = React.memo(_ComicsForm);

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 16
  },
  textfieldBox: { width: "100%", rowGap: 8 }
});
