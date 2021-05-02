"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = void 0;
var removeEmpty = function (obj) {
    if (!obj)
        return {};
    var newObj = {};
    Object.keys(obj).forEach(function (key) {
        if (obj[key] === Object(obj[key]))
            newObj[key] = removeEmpty(obj[key]);
        else if (obj[key] !== undefined)
            newObj[key] = obj[key];
    });
    return newObj;
};
var getOptions = function (momentOptions) {
    var initOptions = window ? window.notifyConfigs : {};
    var resultConfigs = __assign(__assign({ position: 'bottom-right', maxCount: 3, lifetime: 5000 }, initOptions), removeEmpty(momentOptions));
    return resultConfigs;
};
exports.getOptions = getOptions;
//# sourceMappingURL=assemblOption.js.map