import React, { forwardRef, Ref } from "react";
import {
  ScrollView as RNScrollView,
  ScrollViewProps as RNScrollViewProps,
} from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type ScrollViewProps<ThemeT> = RNScrollViewProps & {
  st?: ViewSt<ThemeT>;
};

export function makeScrollView<ThemeT>(
  theme: ThemeT
): React.FC<ScrollViewProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function ScrollView(
    { st, ...rest }: ScrollViewProps<ThemeT>,
    ref: Ref<RNScrollView>
  ) {
    const style = useSt(st ?? {});

    return <RNScrollView {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
