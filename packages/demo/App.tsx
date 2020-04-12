import React from "react";
import { Components } from "./design-system-primitives";

const { View, Text } = Components;

export default function App() {
  return (
    <View
      st={({ theme, dimensions }) => {
        return {
          flexDirection: dimensions.window.width > 300 ? "row" : "column",
          backgroundColor: theme.colors.background,
        };
      }}
    >
      <Text
        st={({ theme }) => {
          return {
            fontFamily: theme.typography.fonts.Inter,
            color: theme.colors.text,
          };
        }}
      >
        Hello World
      </Text>
    </View>
  );
}
