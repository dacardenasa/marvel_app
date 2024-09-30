import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import uuid from "react-native-uuid";

import { Box } from "../Box";
import { Typography } from "../Typography";


type CustomTabsProps<T> = {
  activeTab: keyof T;
  tabs: T;
  renderScene: Record<keyof T, { render: React.ReactNode }>;
};

export const CustomTabs = <T extends object>({
  activeTab,
  tabs,
  renderScene
}: CustomTabsProps<T>) => {
  const keys = Object.keys(tabs);
  const lastItem = keys.length - 1;
  const [tabActive, setTabActive] = useState<keyof T>(activeTab);

  const handlePressTab = (tab: keyof T) => {
    setTabActive(tab);
  };

  useEffect(() => {
    setTabActive(activeTab);
  }, [activeTab]);

  return (
    <Box style={styles.container}>
      <Box style={styles.optionsContainer}>
        {keys.map((key, index) => (
          <Pressable
            key={uuid.v4().toString()}
            style={{ width: `${100 / keys.length}%` }}
            onPress={() => handlePressTab(key as keyof T)}
          >
            <Box
              style={{
                ...styles.optionBox,
                ...(tabActive === (key as keyof T)
                  ? { ...styles.tabActive }
                  : {}),
                ...(index === lastItem ? {} : styles.rightBorder)
              }}
            >
              <Typography lightColor="white" darkColor="white" type="subtitle">
                {key}
              </Typography>
            </Box>
          </Pressable>
        ))}
      </Box>
      {renderScene[tabActive].render}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", rowGap: 16 },
  optionsContainer: {
    width: "100%",
    backgroundColor: "#E53034",
    flexDirection: "row"
  },
  optionBox: {
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  tabActive: {
    borderBottomWidth: 3,
    borderColor: "white"
  },
  rightBorder: {
    borderRightWidth: 2,
    borderRightColor: "white"
  }
});
