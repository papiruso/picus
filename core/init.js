"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var init = function (configs) {
    if (typeof window !== "undefined") {
        if (window instanceof Window) {
            window.notifyConfigs = configs;
        }
    }
};
exports.init = init;
//# sourceMappingURL=init.js.map