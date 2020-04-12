import { makeView } from "./View";
import { makeText } from "./Text";
import { makeTouchableOpacity } from "./TouchableOpacity";

export function makeComponents<ThemeT>(theme: ThemeT) {
  return {
    View: makeView<ThemeT>(theme),
    Text: makeText<ThemeT>(theme),
    TouchableOpacity: makeTouchableOpacity<ThemeT>(theme),
  };
}
