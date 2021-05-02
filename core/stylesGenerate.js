"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPanStyle = exports.getContentStyle = void 0;
var getContentCurrentPosition = function (_a) {
    var position = _a.position;
    switch (position) {
        case 'top-left':
            return "\n\t\t\t\ttop: 0px;\n\t\t\t\tleft: 0px;\n\t\t\t";
        case 'top-center':
            return "\n\t\t\t\ttop: 0px;\n\t\t\t\tleft: 0px;\n\t\t\t\tright: 0px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t";
        case 'top-right':
            return "\n\t\t\t\ttop: 0px;\n\t\t\t\tright: 0px;\n\t\t\t";
        case 'bottom-left':
            return "\n\t\t\t\tbottom: 0px;\n\t\t\t\tleft: 0px;\n\t\t\t";
        case 'bottom-center':
            return "\n\t\t\t\tbottom: 0px;\n\t\t\t\tleft: 0px;\n\t\t\t\tright: 0px;\n\t\t\t\tmargin: 0 auto;\n\t\t\t";
        case 'bottom-right':
            return "\n\t\t\t\tbottom: 0px;\n\t\t\t\tright: 0px;\n\t\t\t";
        default:
            return "";
    }
};
var getAnimationCurrentPosition = function (_a) {
    var position = _a.position, className = _a.className;
    switch (position) {
        case 'top-left':
            return "\n\t\t\t@keyframes showPan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(calc(-100% - 20px));\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t@keyframes hidePan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(calc(-100% - 20px));\n\t\t\t\t}\n\t\t\t}\n\t\t\t";
        case 'top-center':
            return "\n\t\t\t@keyframes showPan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateY(calc(-100% - 35px));\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t@keyframes hidePan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateY(calc(-100% - 35px));\n\t\t\t\t}\n\t\t\t}\n\t\t\t";
        case 'top-right':
            return "\n\t\t\t@keyframes showPan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(calc(100% + 20px));\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t@keyframes hidePan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(calc(100% + 20px));\n\t\t\t\t}\n\t\t\t}\n\t\t\t";
        case 'bottom-left':
            return "\n\t\t\t@keyframes showPan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(calc(-100% - 20px));\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t@keyframes hidePan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(calc(-100% - 20px));\n\t\t\t\t}\n\t\t\t}\n\t\t\t";
        case 'bottom-center':
            return "\n\t\t\t@keyframes showPan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateY(calc(100% + 20px));\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t@keyframes hidePan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateY(calc(100% + 20px));\n\t\t\t\t}\n\t\t\t}\n\t\t\t";
        case 'bottom-right':
            return "\n\t\t\t@keyframes showPan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(calc(100% + 20px));\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t@keyframes hidePan_" + className + " {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: translateX(0);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: translateX(calc(100% + 20px));\n\t\t\t\t}\n\t\t\t}\n\t\t\t";
        default:
            return "";
    }
};
var getContentStyle = function (_a) {
    var position = _a.position, className = _a.className;
    return "\n\t<style>\n\t\t." + className + " {\n\t\t\twidth: 285px;\n\t\t\tposition: fixed;\n\t\t\tz-index: 1001;\n\t\t\tpadding: 20px;\n\t\t\t" + getContentCurrentPosition({ position: position }) + "\n\t\t}\n\n\t\t." + className + " div:first-of-type {\n\t\t\tmargin: 0;\n\t\t}\n\t</style>\n";
};
exports.getContentStyle = getContentStyle;
var getPanStyle = function (_a) {
    var position = _a.position, className = _a.className, backgroundColor = _a.backgroundColor;
    return "\n\t<style>\n\t\t." + className + " {\n\t\t\tdisplay: flex;\n\t\t\tborder-radius: 5px;\n\t\t\twidth: 100%;\n\t\t\ttransition: all 0.1s;\n\t\t\talign-items: center;\n\t\t\tpadding: 12px 15px;\n\t\t\tbox-sizing: border-box;\n\t\t\tbackground-color: " + backgroundColor + ";\n\t\t\tcolor: white;\n\t\t\tword-wrap: break-word;\n\t\t\twhite-space: pre-wrap;\n\t\t\tmargin-top: 15px;\n\t\t\tposition: relative;\n\t\t\tfont-weight: normal;\n\t\t\ttransition: margin-bottom 300ms ease 0ms;\n\t\t}\n\t\t\n\t\t." + className + " svg {\n\t\t\tflex: none;\n\t\t}\n\n\t\t" + getAnimationCurrentPosition({ position: position, className: className }) + "\n\t</style>\n";
};
exports.getPanStyle = getPanStyle;
//# sourceMappingURL=stylesGenerate.js.map