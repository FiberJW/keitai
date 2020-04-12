import { useEffect, useState, useCallback, useMemo } from "react";
import { Dimensions, ScaledSize, StyleSheet } from "react-native";
import { St, DimensionsT } from "./types";

export function makeUseSt<ThemeT>(theme: ThemeT) {
  function useSt(st: St<ThemeT>) {
    const [dimensions, setDimensions] = useState<DimensionsT>({
      window: Dimensions.get("window"),
      screen: Dimensions.get("screen"),
    });

    const onChange = useCallback(function onChange({
      window,
      screen,
    }: {
      window: ScaledSize;
      screen: ScaledSize;
    }) {
      setDimensions({ window, screen });
    },
    []);

    useEffect(function manageDimensionsEventListeners() {
      Dimensions.addEventListener("change", onChange);

      return () => Dimensions.removeEventListener("change", onChange);
    }, []);

    const compiledStyleSheet = useMemo(() => {
      let style = {};
      if (st instanceof Array) {
        for (const s of st) {
          if (typeof s === "function") {
            Object.assign(
              style,
              s({ colorScheme: "light", dimensions, theme })
            );
          } else {
            Object.assign(style, st);
          }
        }
      } else if (typeof st === "function") {
        Object.assign(style, st({ colorScheme: "light", dimensions, theme }));
      } else {
        Object.assign(style, st);
      }

      return StyleSheet.create({
        style,
      });
    }, [dimensions, st]);

    return compiledStyleSheet.style;
  }

  return { useSt };
}
