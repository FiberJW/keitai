import React from "react";
import { ScrollViewProps as RNScrollViewProps } from "react-native";
import { ViewSt } from "../types";
declare type ScrollViewProps<ThemeT> = RNScrollViewProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeScrollView<ThemeT>(theme: ThemeT): React.FC<ScrollViewProps<ThemeT>>;
export {};
