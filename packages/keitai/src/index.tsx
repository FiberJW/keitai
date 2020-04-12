import { makeComponents } from "./components";

export function make<ThemeT>(theme: ThemeT) {
  return {
    ...makeComponents<ThemeT>(theme),
  };
}
