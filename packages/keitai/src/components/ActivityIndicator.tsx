import React, { forwardRef, Ref } from "react";
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type ActivityIndicatorProps<ThemeT> = RNActivityIndicatorProps & {
  st?: ViewSt<ThemeT>;
};

export function makeActivityIndicator<ThemeT>(
  theme: ThemeT
): React.FC<ActivityIndicatorProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function ActivityIndicator(
    { st, ...rest }: ActivityIndicatorProps<ThemeT>,
    ref: Ref<RNActivityIndicator>
  ) {
    const style = useSt(st ?? {});

    return (
      <RNActivityIndicator {...rest} ref={ref} style={[rest.style, style]} />
    );
  });
}
