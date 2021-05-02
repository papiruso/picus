"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashGenerator = void 0;
var hashGenerator = function () {
    var base = 'ADEFGHIaJKLMNOP5QRSTUVaposnq4099asndjvansdklvksdampmdNOSnOOONDOAWXYZbcBdefghmnopqrstuvCwxyz012346789';
    var hash = '';
    var key = Math.floor(Math.random() * 10000000000);
    if (key < 1000000000) {
        key += 1000000000;
    }
    for (var i = 0; i < 5; i++) {
        var place = key % 100;
        key = Math.floor(key / 100);
        hash += base[place];
    }
    return hash;
};
exports.hashGenerator = hashGenerator;
//# sourceMappingURL=hashGenerator.js.map