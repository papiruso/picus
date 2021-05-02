"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pan = void 0;
var stylesGenerate_1 = require("./stylesGenerate");
var contstans_1 = require("./contstans");
var pan = function (_a) {
    var type = _a.type, text = _a.text, className = _a.className, position = _a.position;
    return "\n\t" + contstans_1.panVariantStyles[type].icon + "\n\t<div style=\"margin-left: 10px;\">\n\t\t" + text + "\n\t</div>\n\t" + stylesGenerate_1.getPanStyle({
        position: position,
        className: className,
        backgroundColor: contstans_1.panVariantStyles[type].backgroundColor,
    }) + "\n";
};
exports.pan = pan;
//# sourceMappingURL=pan.js.map