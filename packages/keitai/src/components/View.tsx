import React, { forwardRef, Ref } from "react";
import { View as RNView, ViewProps as RNViewProps } from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type ViewProps<ThemeT> = RNViewProps & {
  st?: ViewSt<ThemeT>;
};

export function makeView<ThemeT>(theme: ThemeT): React.FC<ViewProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function View(
    { st, ...rest }: ViewProps<ThemeT>,
    ref: Ref<RNView>
  ) {
    const style = useSt(st ?? {});

    return <RNView {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
