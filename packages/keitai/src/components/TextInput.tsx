import React, { forwardRef, Ref } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { TextSt } from "../shared/types";
import { makeUseSt } from "../shared/hooks";

type TextInputProps<ThemeT> = RNTextInputProps & {
  st?: TextSt<ThemeT>;
};

export function makeTextInput<ThemeT>(
  theme: ThemeT
): React.FC<TextInputProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function TextInput(
    { st, ...rest }: TextInputProps<ThemeT>,
    ref: Ref<RNTextInput>
  ) {
    const style = useSt(st ?? {});

    return <RNTextInput {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
