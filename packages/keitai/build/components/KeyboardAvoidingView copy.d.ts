import React from "react";
import { KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps } from "react-native";
import { ViewSt } from "../types";
declare type KeyboardAvoidingViewProps<ThemeT> = RNKeyboardAvoidingViewProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeKeyboardAvoidingView<ThemeT>(theme: ThemeT): React.FC<KeyboardAvoidingViewProps<ThemeT>>;
export {};
