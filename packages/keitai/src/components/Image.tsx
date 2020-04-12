import React, { forwardRef, Ref } from "react";
import { Image as RNImage, ImageProps as RNImageProps } from "react-native";
import { ImageSt } from "../types";
import { makeUseSt } from "../hooks";

type ImageProps<ThemeT> = RNImageProps & {
  st?: ImageSt<ThemeT>;
};

export function makeImage<ThemeT>(theme: ThemeT): React.FC<ImageProps<ThemeT>> {
  const { useSt } = makeUseSt(theme);

  return forwardRef(function Image(
    { st, ...rest }: ImageProps<ThemeT>,
    ref: Ref<RNImage>
  ) {
    const style = useSt(st ?? {});

    return <RNImage {...rest} ref={ref} style={[rest.style, style]} />;
  });
}
