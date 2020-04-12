import React from "react";
import { ImageBackgroundProps as RNImageBackgroundProps } from "react-native";
import { ImageSt } from "../types";
declare type ImageBackgroundProps<ThemeT> = RNImageBackgroundProps & {
    st?: ImageSt<ThemeT>;
};
export declare function makeImage<ThemeT>(theme: ThemeT): React.FC<ImageBackgroundProps<ThemeT>>;
export {};
