import React from "react";
import { ActivityIndicatorProps as RNActivityIndicatorProps } from "react-native";
import { ViewSt } from "../types";
declare type ActivityIndicatorProps<ThemeT> = RNActivityIndicatorProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeActivityIndicator<ThemeT>(theme: ThemeT): React.FC<ActivityIndicatorProps<ThemeT>>;
export {};
