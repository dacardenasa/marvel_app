import React from "react";
import { Platform, StyleSheet } from "react-native";

import { SearchProvider } from "./context/search.provider";
import { useThemeColor } from "@/hooks/useThemeColor";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBarButton } from "./components";

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
              <TabBarButton
                color={color}
                label="Home"
                name={focused ? "home" : "home-outline"}
              />
            )
          }}
        />
        <Tab.Screen
          name="comics"
          component={Comics}
          options={{
            title: "Comics",
            tabBarIcon: ({ color, focused }) => (
              <TabBarButton
                color={color}
                label="Comics"
                name={focused ? "book" : "book-outline"}
              />
            )
          }}
        />
        <Tab.Screen
          name="characters"
          component={Characters}
          options={{
            title: "Characters",
            tabBarIcon: ({ color, focused }) => (
              <TabBarButton
                color={color}
                label="Characters"
                name={focused ? "person" : "person-outline"}
              />
            )
          }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{
            title: "Search",
            tabBarIcon: ({ color, focused }) => (
              <TabBarButton
                color={color}
                label="Search"
                name={focused ? "search" : "search-outline"}
              />
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
