import React from "react";
import { RefreshControlProps as RNRefreshControlProps } from "react-native";
import { ViewSt } from "../types";
declare type RefreshControlProps<ThemeT> = RNRefreshControlProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeRefreshControl<ThemeT>(theme: ThemeT): React.FC<RefreshControlProps<ThemeT>>;
export {};
