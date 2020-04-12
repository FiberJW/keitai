import React, { forwardRef, Ref } from "react";
import {
  RefreshControl as RNRefreshControl,
  RefreshControlProps as RNRefreshControlProps,
} from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type RefreshControlProps<ThemeT> = RNRefreshControlProps & {
  st?: ViewSt<ThemeT>;
};

export function makeRefreshControl<ThemeT>(
  theme: ThemeT
): React.FC<RefreshControlProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function RefreshControl(
    { st, ...rest }: RefreshControlProps<ThemeT>,
    ref: Ref<RNRefreshControl>
  ) {
    const style = useSt(st ?? {});

    return <RNRefreshControl {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
