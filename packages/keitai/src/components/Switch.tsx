import React, { forwardRef, Ref } from "react";
import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type SwitchProps<ThemeT> = RNSwitchProps & {
  st?: ViewSt<ThemeT>;
};

export function makeSwitch<ThemeT>(
  theme: ThemeT
): React.FC<SwitchProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function Switch(
    { st, ...rest }: SwitchProps<ThemeT>,
    ref: Ref<RNSwitch>
  ) {
    const style = useSt(st ?? {});

    return <RNSwitch {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
