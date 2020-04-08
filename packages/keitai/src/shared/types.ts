import { ImageStyle, TextStyle, ViewStyle, ScaledSize } from "react-native";

export type DimensionsT = {
  window: ScaledSize;
  screen: ScaledSize;
};

export type FunctionalStyle<ThemeT, Style> = (values: {
  colorScheme: "light" | "dark";
  dimensions: DimensionsT;
  theme: ThemeT;
}) => Style;

export type ViewSt<ThemeT> =
  | ViewStyle
  | FunctionalStyle<ThemeT, ViewStyle>
  | (ViewStyle | FunctionalStyle<ThemeT, ViewStyle>)[];

export type TextSt<ThemeT> =
  | TextStyle
  | FunctionalStyle<ThemeT, TextStyle>
  | (TextStyle | FunctionalStyle<ThemeT, TextStyle>)[];

export type ImageSt<ThemeT> =
  | ImageStyle
  | FunctionalStyle<ThemeT, ImageStyle>
  | (ImageStyle | FunctionalStyle<ThemeT, ImageStyle>)[];
