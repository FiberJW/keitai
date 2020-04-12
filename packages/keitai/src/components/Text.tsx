import React, { forwardRef, Ref } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { TextSt } from "../types";
import { makeUseSt } from "../hooks";

type TextProps<ThemeT> = RNTextProps & {
  st?: TextSt<ThemeT>;
};

export function makeText<ThemeT>(theme: ThemeT): React.FC<TextProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function Text(
    { st, ...rest }: TextProps<ThemeT>,
    ref: Ref<RNText>
  ) {
    const style = useSt(st ?? {});

    return <RNText {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
