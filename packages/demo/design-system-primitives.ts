import { make } from "keitai";
import { Platform } from "react-native";

export const theme = {
  typography: {
    fonts: {
      Inter: Platform.select({
        ios: "Cochin",
        android: "Roboto",
        web: "sans-serif",
      }),
    },
  },
  colors: {
    background: "black",
    text: "white",
  },
};

export type ThemeT = typeof theme;

export const Components = make<ThemeT>(theme);
