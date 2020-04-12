import React from "react";
import { ImageProps as RNImageProps } from "react-native";
import { ImageSt } from "../types";
declare type ImageProps<ThemeT> = RNImageProps & {
    st?: ImageSt<ThemeT>;
};
export declare function makeImage<ThemeT>(theme: ThemeT): React.FC<ImageProps<ThemeT>>;
export {};
