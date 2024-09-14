import React from "react";

import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/navigation";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="comics/index"
        options={{
          title: "Comics",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "book" : "book-outline"}
              color={color}
            />
          )
        }}
      />
      <Tabs.Screen
        name="characters/index"
        options={{
          title: "Characters",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "albums" : "albums-outline"}
              color={color}
            />
          )
        }}
      />
    </Tabs>
  );
}
