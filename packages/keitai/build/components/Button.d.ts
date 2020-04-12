import React from "react";
import { TouchableOpacityProps as RNTouchableOpacityProps } from "react-native";
import { ViewSt } from "../shared/types";
declare type TouchableOpacityProps<ThemeT> = RNTouchableOpacityProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeTouchableOpacity<ThemeT>(theme: ThemeT): React.FC<TouchableOpacityProps<ThemeT>>;
export {};
