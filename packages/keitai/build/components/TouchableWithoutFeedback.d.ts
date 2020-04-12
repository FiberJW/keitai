import React from "react";
import { TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps } from "react-native";
import { ViewSt } from "../types";
declare type TouchableWithoutFeedbackProps<ThemeT> = RNTouchableWithoutFeedbackProps & {
    st?: ViewSt<ThemeT>;
};
export declare function makeTouchableWithoutFeedback<ThemeT>(theme: ThemeT): React.FC<TouchableWithoutFeedbackProps<ThemeT>>;
export {};
