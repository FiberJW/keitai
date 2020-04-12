import React from "react";
import { SwitchProps as RNSwitchProps } from "react-native";
import { ViewSt } from "../types";
declare type SwitchProps<ThemeT> = RNSwitchProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeSwitch<ThemeT>(theme: ThemeT): React.FC<SwitchProps<ThemeT>>;
export {};
