import React, { useState } from "react";
import { Components } from "./design-system-primitives";

const { View, Text, TouchableOpacity } = Components;

export default function App() {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("dark");

  return (
    <View
      st={({ theme }) => {
        return {
          backgroundColor: theme.colors.background[colorScheme],
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        };
      }}
    >
      <Text
        st={({ theme }) => {
          return {
            fontFamily: theme.typography.fonts.Inter,
            color: theme.colors.headerColor[colorScheme],
            fontSize: theme.typography.sizes.h1,
            marginBottom: 16,
          };
        }}
      >
        Keitai
      </Text>
      <TouchableOpacity
        st={({ theme }) => {
          return {
            backgroundColor: theme.colors.toggleButtonBG[colorScheme],
            padding: 8,
            borderRadius: 4,
          };
        }}
        onPress={() => {
          if (colorScheme === "dark") {
            setColorScheme("light");
          } else {
            setColorScheme("dark");
          }
        }}
      >
        <Text
          st={({ theme }) => {
            return {
              color: theme.colors.toggleButtonLabel[colorScheme],
              fontSize: theme.typography.sizes.buttonLabel,
            };
          }}
        >
          Press Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}
