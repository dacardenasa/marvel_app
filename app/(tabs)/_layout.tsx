import React from "react";
import { Platform, StyleSheet } from "react-native";

import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation";
import { Box, Typography } from "@/components";

import { SearchProvider } from "./context/search.provider";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function TabLayout() {
  const bgColor = useThemeColor(
    { light: "black", dark: "white" },
    "background"
  );
  return (
    <SearchProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#E53034",
          headerShown: false,
          tabBarStyle: {
            ...styles.containerTab,
            ...(Platform.OS === "ios" ? { bottom: 24 } : {}),
            backgroundColor: bgColor
          },
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Box
                darkColor="transparent"
                lightColor="transparent"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  ...(Platform.OS === "ios" ? { top: 16 } : {})
                }}
              >
                <TabBarIcon
                  name={focused ? "home" : "home-outline"}
                  color={color}
                />
                <Typography style={{ color }}>Home</Typography>
              </Box>
            )
          }}
        />
        <Tabs.Screen
          name="comics/index"
          options={{
            title: "Comics",
            tabBarIcon: ({ color, focused }) => (
              <Box
                darkColor="transparent"
                lightColor="transparent"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  ...(Platform.OS === "ios" ? { top: 16 } : {})
                }}
              >
                <TabBarIcon
                  name={focused ? "book" : "book-outline"}
                  color={color}
                />
                <Typography style={{ color }}>Comics</Typography>
              </Box>
            )
          }}
        />
        <Tabs.Screen
          name="characters/index"
          options={{
            title: "Characters",
            tabBarIcon: ({ color, focused }) => (
              <Box
                darkColor="transparent"
                lightColor="transparent"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  ...(Platform.OS === "ios" ? { top: 16 } : {})
                }}
              >
                <TabBarIcon
                  name={focused ? "person" : "person-outline"}
                  color={color}
                />
                <Typography style={{ color }}>Characters</Typography>
              </Box>
            )
          }}
        />
        <Tabs.Screen
          name="search/index"
          options={{
            title: "Search",
            tabBarIcon: ({ color, focused }) => (
              <Box
                darkColor="transparent"
                lightColor="transparent"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  ...(Platform.OS === "ios" ? { top: 16 } : {})
                }}
              >
                <TabBarIcon
                  name={focused ? "search" : "search-outline"}
                  color={color}
                />
                <Typography style={{ color }}>Search</Typography>
              </Box>
            )
          }}
        />
      </Tabs>
    </SearchProvider>
  );
}

const styles = StyleSheet.create({
  containerTab: {
    position: "absolute",
    bottom: 8,
    left: 16,
    right: 16,
    height: 65,
    borderRadius: 16,
    elevation: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});
