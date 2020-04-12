import React from "react";
import { ViewProps as RNSafeAreaViewProps } from "react-native";
import { ViewSt } from "../types";
declare type SafeAreaViewProps<ThemeT> = RNSafeAreaViewProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeSafeAreaView<ThemeT>(theme: ThemeT): React.FC<SafeAreaViewProps<ThemeT>>;
export {};
