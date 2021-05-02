"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = void 0;
var hashGenerator_1 = require("./utils/hashGenerator");
var pan_1 = require("./pan");
var show_1 = require("./show");
var stylesGenerate_1 = require("./stylesGenerate");
var contstans_1 = require("./contstans");
var assemblOption_1 = require("./assemblOption");
var countController_1 = require("./countController");
var push = function (type, text, data) {
    var options = assemblOption_1.getOptions(data);
    var position = options.position, maxCount = options.maxCount, lifetime = options.lifetime;
    var currentNotifyContentClassName = contstans_1.PAN_BOX_CLASS + "-" + position;
    // Create pan element
    var currentPan = document.createElement('div');
    var notifyContent = document.querySelector("." + currentNotifyContentClassName);
    if (!notifyContent) {
        var currentNotifyContent = document.createElement('div');
        currentNotifyContent.classList.add(currentNotifyContentClassName);
        currentNotifyContent.innerHTML = stylesGenerate_1.getContentStyle({
            position: position,
            className: currentNotifyContentClassName
        });
        notifyContent = document.body.appendChild(currentNotifyContent);
    }
    var className = "notifyPanBox_" + hashGenerator_1.hashGenerator();
    countController_1.countController(notifyContent, maxCount, position, className);
    // Generate pan
    currentPan.className = className;
    currentPan.classList.add(contstans_1.PAN_CLASS);
    currentPan.style.animation = "showPan_" + className + " 0.2s cubic-bezier(0.445, 0.050, 0.550, 0.950) both";
    currentPan.innerHTML = pan_1.pan({
        type: type,
        text: text,
        className: className,
        position: position,
    });
    var correntNotifyContent = document.querySelector("." + currentNotifyContentClassName);
    if (!show_1.isTopPosition(position)) {
        if (correntNotifyContent) {
            correntNotifyContent.prepend(currentPan);
        }
    }
    else {
        if (correntNotifyContent) {
            correntNotifyContent.append(currentPan);
        }
    }
    // LiveCycle pan
    show_1.show(notifyContent, currentPan, className, lifetime);
};
exports.push = push;
//# sourceMappingURL=push.js.map