"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
function makeUseSt(theme) {
    function useSt(st) {
        var _a = react_1.useState({
            window: react_native_1.Dimensions.get("window"),
            screen: react_native_1.Dimensions.get("screen"),
        }), dimensions = _a[0], setDimensions = _a[1];
        var onChange = react_1.useCallback(function onChange(_a) {
            var window = _a.window, screen = _a.screen;
            setDimensions({ window: window, screen: screen });
        }, []);
        react_1.useEffect(function manageDimensionsEventListeners() {
            react_native_1.Dimensions.addEventListener("change", onChange);
            return function () { return react_native_1.Dimensions.removeEventListener("change", onChange); };
        }, []);
        var compiledStyleSheet = react_1.useMemo(function () {
            var style = {};
            if (st instanceof Array) {
                for (var _i = 0, st_1 = st; _i < st_1.length; _i++) {
                    var s = st_1[_i];
                    if (typeof s === "function") {
                        Object.assign(style, s({ colorScheme: "light", dimensions: dimensions, theme: theme }));
                    }
                    else {
                        Object.assign(style, st);
                    }
                }
            }
            else if (typeof st === "function") {
                Object.assign(style, st({ colorScheme: "light", dimensions: dimensions, theme: theme }));
            }
            else {
                Object.assign(style, st);
            }
            return react_native_1.StyleSheet.create({
                style: style,
            });
        }, [dimensions, st]);
        return compiledStyleSheet.style;
    }
    return { useSt: useSt };
}
exports.makeUseSt = makeUseSt;
