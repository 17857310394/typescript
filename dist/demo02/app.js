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
var start = performance.now();
var a = getGreatestCommonDivisor(15021, 3);
var end = performance.now();
console.log("\u51FD\u6570\u6267\u884C\u65F6\u95F4\u4E3A\uFF1A" + (end - start) + "\u6BEB\u79D2");
// console.time("getGreatestCommonDivisor3");
// getGreatestCommonDivisor3(24,36);
// console.timeEnd("getGreatestCommonDivisor3");
//# sourceMappingURL=app.js.map