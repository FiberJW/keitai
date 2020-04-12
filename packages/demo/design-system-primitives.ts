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
    sizes: {
      h1: 32,
      buttonLabel: 24,
    },
  },
  colors: {
    background: {
      dark: "black",
      light: "white",
    },
    headerColor: { dark: "white", light: "black" },
    toggleButtonBG: { dark: "white", light: "black" },
    toggleButtonLabel: {
      dark: "black",
      light: "white",
    },
  },
};

export type ThemeT = typeof theme;

export const Components = make<ThemeT>(theme);
