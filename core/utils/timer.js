"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
function Timer(startCallback) {
    var id;
    this.start = function (delay) {
        id = setTimeout(startCallback, delay);
    };
    this.stop = function () {
        clearTimeout(id);
    };
}
exports.Timer = Timer;
;
exports.default = { Timer: Timer };
//# sourceMappingURL=timer.js.map