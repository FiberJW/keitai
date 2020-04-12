import React from "react";
import { TextProps as RNTextProps } from "react-native";
import { TextSt } from "../types";
declare type TextProps<ThemeT> = RNTextProps & {
    st?: TextSt<ThemeT>;
};
export declare function makeText<ThemeT>(theme: ThemeT): React.FC<TextProps<ThemeT>>;
export {};
