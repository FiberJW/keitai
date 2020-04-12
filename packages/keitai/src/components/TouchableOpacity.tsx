import React, { forwardRef, Ref } from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";
import { ViewSt } from "../shared/types";
import { makeUseSt } from "../shared/hooks";

type TouchableOpacityProps<ThemeT> = RNTouchableOpacityProps & {
  st?: ViewSt<ThemeT>;
};

export function makeTouchableOpacity<ThemeT>(
  theme: ThemeT
): React.FC<TouchableOpacityProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function TouchableOpacity(
    { st, ...rest }: TouchableOpacityProps<ThemeT>,
    ref: Ref<RNTouchableOpacity>
  ) {
    const style = useSt(st ?? {});

    return (
      <RNTouchableOpacity {...rest} ref={ref} style={[rest.style, style]} />
    );
  });
}
