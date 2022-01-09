"use strict";
exports.__esModule = true;
exports.registerAllMuiComponents = void 0;
var button_1 = require("./components/button");
var button_group_1 = require("./components/button-group");
var chip_1 = require("./components/chip");
function registerAllMuiComponents(PLASMIC) {
    (0, button_1["default"])(PLASMIC);
    (0, button_group_1["default"])(PLASMIC);
    (0, chip_1["default"])(PLASMIC);
}
exports.registerAllMuiComponents = registerAllMuiComponents;
