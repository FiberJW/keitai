import React, { forwardRef, Ref } from "react";
import {
  SafeAreaView as RNSafeAreaView,
  ViewProps as RNSafeAreaViewProps,
} from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type SafeAreaViewProps<ThemeT> = RNSafeAreaViewProps & {
  st?: ViewSt<ThemeT>;
};

export function makeSafeAreaView<ThemeT>(
  theme: ThemeT
): React.FC<SafeAreaViewProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function SafeAreaView(
    { st, ...rest }: SafeAreaViewProps<ThemeT>,
    ref: Ref<RNSafeAreaView>
  ) {
    const style = useSt(st ?? {});

    return <RNSafeAreaView {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
