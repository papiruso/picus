"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.panVariantStyles = exports.PanVariants = exports.PanContentPositions = exports.PAN_CLASS = exports.PAN_BOX_CLASS = void 0;
exports.PAN_BOX_CLASS = 'contentBox_ASGFQ31';
exports.PAN_CLASS = 'notifyPan_ASGFQasd3da1';
var PanContentPositions;
(function (PanContentPositions) {
    PanContentPositions["TOP_LEFT"] = "top-left";
    PanContentPositions["TOP_CENTER"] = "top-center";
    PanContentPositions["TOP_RIGHT"] = "top-right";
    PanContentPositions["BOTTOM_LEFT"] = "bottom-left";
    PanContentPositions["BOTTOM_CENTER"] = "bottom-center";
    PanContentPositions["BOTTOM_RIGHT"] = "bottom-right";
})(PanContentPositions = exports.PanContentPositions || (exports.PanContentPositions = {}));
var PanVariants;
(function (PanVariants) {
    PanVariants["SUCCESS"] = "success";
    PanVariants["ERROR"] = "error";
    PanVariants["WARNING"] = "warning";
    PanVariants["INFO"] = "info";
})(PanVariants = exports.PanVariants || (exports.PanVariants = {}));
var icons_1 = require("./utils/icons");
var SUCCESS = PanVariants.SUCCESS, ERROR = PanVariants.ERROR, WARNING = PanVariants.WARNING, INFO = PanVariants.INFO;
exports.panVariantStyles = (_a = {},
    _a[SUCCESS] = {
        backgroundColor: '#40C16C',
        icon: icons_1.iconData[SUCCESS],
    },
    _a[ERROR] = {
        backgroundColor: '#D63D3D',
        icon: icons_1.iconData[ERROR],
    },
    _a[WARNING] = {
        backgroundColor: '#EDA927',
        icon: icons_1.iconData[WARNING],
    },
    _a[INFO] = {
        backgroundColor: '#333BE9',
        icon: icons_1.iconData[INFO],
    },
    _a);
//# sourceMappingURL=contstans.js.map