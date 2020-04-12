import React, { forwardRef, Ref } from "react";
import { Picker as RNPicker, PickerProps as RNPickerProps } from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type PickerProps<ThemeT> = RNPickerProps & {
  st?: ViewSt<ThemeT>;
};

export function makePicker<ThemeT>(
  theme: ThemeT
): React.FC<PickerProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function Picker(
    { st, ...rest }: PickerProps<ThemeT>,
    ref: Ref<RNPicker>
  ) {
    const style = useSt(st ?? {});

    return <RNPicker {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
