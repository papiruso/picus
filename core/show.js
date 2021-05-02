"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show = exports.hidePan = exports.isTopPosition = void 0;
var contstans_1 = require("./contstans");
var timer_1 = require("./utils/timer");
var isTopPosition = function (position) { return position.split('-')[0] === 'top'; };
exports.isTopPosition = isTopPosition;
var hidePan = function (content, pan, className) {
    pan.classList.remove(contstans_1.PAN_CLASS);
    pan.style.animation = "hidePan_" + className + " 0.2s cubic-bezier(0.445, 0.050, 0.550, 0.950) both";
    setTimeout(function () {
        pan.style.marginBottom = "-" + (pan.offsetHeight + 15) + "px";
    }, 200);
    setTimeout(function () {
        pan.remove();
        if (content && content.childElementCount === 1) {
            content.remove();
        }
    }, 1000);
};
exports.hidePan = hidePan;
var show = function (content, pan, className, lifetime) {
    // Управление появлением и удалением плашек
    var timer = new timer_1.Timer(function () {
        exports.hidePan(content, pan, className);
    });
    var time = lifetime;
    timer.start(time);
    var startTime = Date.now();
    var currentTime;
    var mouseoverTime;
    pan.addEventListener('mouseover', function () {
        mouseoverTime = Date.now();
        currentTime = mouseoverTime - startTime;
        timer.stop();
    });
    pan.addEventListener('mouseout', function () {
        time -= currentTime;
        timer.start(time);
        startTime = Date.now();
    });
};
exports.show = show;
//# sourceMappingURL=show.js.map