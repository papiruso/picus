"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countController = void 0;
var contstans_1 = require("./contstans");
var show_1 = require("./show");
var countController = function (notifyContent, maxCount, position, className) {
    var panList = notifyContent.getElementsByClassName(contstans_1.PAN_CLASS);
    var pnKey = show_1.isTopPosition(position) ? 0 : panList.length - 1;
    var lastPan = panList[pnKey];
    if (notifyContent.childElementCount <= maxCount) {
        return true;
    }
    else {
        show_1.hidePan(notifyContent, lastPan, className);
        return false;
    }
};
exports.countController = countController;
//# sourceMappingURL=countController.js.map