import { ImageStyle, TextStyle, ViewStyle, ScaledSize } from "react-native";
import { ColorSchemeName } from "react-native-appearance";
export declare type DimensionsT = {
    window: ScaledSize;
    screen: ScaledSize;
};
export declare type FunctionalStyle<ThemeT, Style> = (values: {
    colorScheme: ColorSchemeName;
    dimensions: DimensionsT;
    theme: ThemeT;
}) => Style;
export declare type ViewSt<ThemeT> = ViewStyle | FunctionalStyle<ThemeT, ViewStyle> | (ViewStyle | FunctionalStyle<ThemeT, ViewStyle>)[];
export declare type TextSt<ThemeT> = TextStyle | FunctionalStyle<ThemeT, TextStyle> | (TextStyle | FunctionalStyle<ThemeT, TextStyle>)[];
export declare type ImageSt<ThemeT> = ImageStyle | FunctionalStyle<ThemeT, ImageStyle> | (ImageStyle | FunctionalStyle<ThemeT, ImageStyle>)[];
export declare type St<ThemeT> = ViewSt<ThemeT> | TextSt<ThemeT> | ImageSt<ThemeT>;
