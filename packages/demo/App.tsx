import React, { useState } from "react";
import { Components } from "./design-system-primitives";

const { View, Text, TouchableOpacity } = Components;

export default function App() {
  return (
    <View
      st={({ theme, colorScheme }) => {
        return {
          backgroundColor: theme.colors.background[colorScheme],
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        };
      }}
    >
      <Text
        st={({ theme, colorScheme }) => {
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
        st={({ theme, colorScheme }) => {
          return {
            backgroundColor: theme.colors.toggleButtonBG[colorScheme],
            padding: 8,
            borderRadius: 4,
          };
        }}
        onPress={() => {
          alert("Hi, Developer :)");
        }}
      >
        <Text
          st={({ theme, colorScheme }) => {
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
