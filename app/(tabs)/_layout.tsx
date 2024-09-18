import React from "react";
import { Platform, StyleSheet } from "react-native";

// import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation";
import { Box, Typography } from "@/components";

import { SearchProvider } from "./context/search.provider";
import { useThemeColor } from "@/hooks/useThemeColor";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from ".";
import Comics from "./comics";
import Characters from "./characters";
import Search from "./search";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const bgColor = useThemeColor(
    { light: "black", dark: "white" },
    "background"
  );
  return (
    <SearchProvider>
      <Tab.Navigator
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
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
        <Tab.Screen
          name="comics"
          component={Comics}
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
        <Tab.Screen
          name="characters"
          component={Characters}
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
        <Tab.Screen
          name="search"
          component={Search}
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
      </Tab.Navigator>
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
