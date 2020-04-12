import React from "react";
import { TouchableHighlightProps as RNTouchableHighlightProps } from "react-native";
import { TextSt } from "../types";
declare type TouchableHighlightProps<ThemeT> = RNTouchableHighlightProps & {
    st?: TextSt<ThemeT>;
};
export declare function makeTouchableHighlight<ThemeT>(theme: ThemeT): React.FC<TouchableHighlightProps<ThemeT>>;
export {};
