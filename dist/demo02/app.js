"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tool_1 = require("../tools/tool");
function getGreatestCommonDivisor(a, b) {
    var min = a;
    var max = b;
    if (a > b) {
        min = b;
        max = a;
    }
    if (min == 0)
        return max;
    return getGreatestCommonDivisor(min, max % min);
}
function getGreatestCommonDivisor3(a, b) {
    if (a == b) {
        return a;
    }
    if ((a & 1) == 0 && (b & 1) == 0) {
        return getGreatestCommonDivisor3(a >> 1, b >> 1) * 2;
    }
    if ((a & 1) == 0 && (b & 1) != 0) {
        return getGreatestCommonDivisor3(a >> 1, b);
    }
    if ((a & 1) != 0 && (b & 1) == 0) {
        return getGreatestCommonDivisor3(a, b >> 1);
    }
    if ((a & 1) != 0 && (b & 1) != 0) {
        var min = a > b ? b : a;
        var max = a > b ? a : b;
        return getGreatestCommonDivisor3(min, max - min);
    }
    return 0;
}
// console.time("getGreatestCommonDivisor3");
tool_1.testFunctionTime(getGreatestCommonDivisor3, 24, 36);
// console.timeEnd("getGreatestCommonDivisor3");
//# sourceMappingURL=app.js.map