import React from "react";
import { ViewProps as RNViewProps } from "react-native";
import { ViewSt } from "../types";
declare type ViewProps<ThemeT> = RNViewProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeView<ThemeT>(theme: ThemeT): React.FC<ViewProps<ThemeT>>;
export {};
