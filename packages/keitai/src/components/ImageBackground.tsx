import React, { forwardRef, Ref } from "react";
import {
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
} from "react-native";
import { ImageSt } from "../types";
import { makeUseSt } from "../hooks";

type ImageBackgroundProps<ThemeT> = RNImageBackgroundProps & {
  st?: ImageSt<ThemeT>;
};

export function makeImage<ThemeT>(
  theme: ThemeT
): React.FC<ImageBackgroundProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function ImageBackground(
    { st, ...rest }: ImageBackgroundProps<ThemeT>,
    ref: Ref<RNImageBackground>
  ) {
    const style = useSt(st ?? {});

    return (
      <RNImageBackground {...rest} ref={ref} style={[rest.style, style]} />
    );
  });
}
