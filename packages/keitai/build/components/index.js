"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View");
var Text_1 = require("./Text");
var TouchableOpacity_1 = require("./TouchableOpacity");
function makeComponents(theme) {
    return {
        View: View_1.makeView(theme),
        Text: Text_1.makeText(theme),
        TouchableOpacity: TouchableOpacity_1.makeTouchableOpacity(theme),
    };
}
exports.makeComponents = makeComponents;
