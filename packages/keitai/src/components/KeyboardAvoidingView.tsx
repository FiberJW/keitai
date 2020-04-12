import React, { forwardRef, Ref } from "react";
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
} from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type KeyboardAvoidingViewProps<ThemeT> = RNKeyboardAvoidingViewProps & {
  st?: ViewSt<ThemeT>;
};

export function makeKeyboardAvoidingView<ThemeT>(
  theme: ThemeT
): React.FC<KeyboardAvoidingViewProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function KeyboardAvoidingView(
    { st, ...rest }: KeyboardAvoidingViewProps<ThemeT>,
    ref: Ref<RNKeyboardAvoidingView>
  ) {
    const style = useSt(st ?? {});

    return (
      <RNKeyboardAvoidingView {...rest} ref={ref} style={[rest.style, style]} />
    );
  });
}
