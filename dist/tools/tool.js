"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testFunctionTime(callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var startTime = process.hrtime();
    var result = callback.apply(void 0, args);
    var endTime = process.hrtime(startTime);
    var seconds = endTime[0];
    var nanoseconds = endTime[1];
    var milliseconds = nanoseconds / 1000000;
    console.log("\u51FD\u6570\u6267\u884C\u7ED3\u679C\uFF1A" + result);
    console.log("\u51FD\u6570\u6267\u884C\u65F6\u95F4\uFF1A" + seconds + "\u79D2 " + milliseconds + "\u6BEB\u79D2");
}
exports.testFunctionTime = testFunctionTime;
//# sourceMappingURL=tool.js.map