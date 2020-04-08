import { makeView } from "./View";
import { makeText } from "./Text";

export function makeComponents<ThemeT>(theme: ThemeT) {
  return {
    View: makeView<ThemeT>(theme),
    Text: makeText<ThemeT>(theme),
  };
}
