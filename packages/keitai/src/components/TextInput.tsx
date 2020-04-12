import React, { forwardRef, Ref } from "react";
import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps,
} from "react-native";
import { TextSt } from "../types";
import { makeUseSt } from "../hooks";

type TouchableHighlightProps<ThemeT> = RNTouchableHighlightProps & {
  st?: TextSt<ThemeT>;
};

export function makeTouchableHighlight<ThemeT>(
  theme: ThemeT
): React.FC<TouchableHighlightProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function TouchableHighlight(
    { st, ...rest }: TouchableHighlightProps<ThemeT>,
    ref: Ref<RNTouchableHighlight>
  ) {
    const style = useSt(st ?? {});

    return (
      <RNTouchableHighlight {...rest} ref={ref} style={[rest.style, style]} />
    );
  });
}
