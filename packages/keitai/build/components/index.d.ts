/// <reference types="react" />
export declare function makeComponents<ThemeT>(theme: ThemeT): {
    View: import("react").FC<import("react-native").ViewProps & {
        st?: import("react-native").ViewStyle | import("../types").FunctionalStyle<ThemeT, import("react-native").ViewStyle> | (import("react-native").ViewStyle | import("../types").FunctionalStyle<ThemeT, import("react-native").ViewStyle>)[] | undefined;
    }>;
    Text: import("react").FC<import("react-native").TextProps & {
        st?: import("react-native").TextStyle | import("../types").FunctionalStyle<ThemeT, import("react-native").TextStyle> | (import("react-native").TextStyle | import("../types").FunctionalStyle<ThemeT, import("react-native").TextStyle>)[] | undefined;
    }>;
    TouchableOpacity: import("react").FC<import("react-native").TouchableOpacityProps & {
        st?: import("react-native").ViewStyle | import("../types").FunctionalStyle<ThemeT, import("react-native").ViewStyle> | (import("react-native").ViewStyle | import("../types").FunctionalStyle<ThemeT, import("react-native").ViewStyle>)[] | undefined;
    }>;
};
