import React from "react";
import { PickerProps as RNPickerProps } from "react-native";
import { ViewSt } from "../types";
declare type PickerProps<ThemeT> = RNPickerProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makePicker<ThemeT>(theme: ThemeT): React.FC<PickerProps<ThemeT>>;
export {};
