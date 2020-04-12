import React, { forwardRef, Ref } from "react";
import {
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  TouchableWithoutFeedbackProps as RNTouchableWithoutFeedbackProps,
} from "react-native";
import { ViewSt } from "../types";
import { makeUseSt } from "../hooks";

type TouchableWithoutFeedbackProps<ThemeT> = RNTouchableWithoutFeedbackProps & {
  st?: ViewSt<ThemeT>;
};

export function makeTouchableWithoutFeedback<ThemeT>(
  theme: ThemeT
): React.FC<TouchableWithoutFeedbackProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function TouchableWithoutFeedback(
    { st, ...rest }: TouchableWithoutFeedbackProps<ThemeT>,
    ref: Ref<RNTouchableWithoutFeedback>
  ) {
    const style = useSt(st ?? {});

    return (
      <RNTouchableWithoutFeedback
        {...rest}
        ref={ref}
        style={[rest.style, style]}
      />
    );
  });
}
