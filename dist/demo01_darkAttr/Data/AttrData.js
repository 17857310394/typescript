"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttrData = /** @class */ (function () {
    function AttrData() {
        this.fix = 0; //固定
        this.more = 0; //修正
        this.total = 0; //总增
    }
    Object.defineProperty(AttrData.prototype, "value", {
        get: function () {
            return this.fix * (1 + this.more) * (1 + this.total);
        },
        enumerable: true,
        configurable: true
    });
    AttrData.prototype.Init = function () {
        this.fix = 0;
        this.more = 0;
        this.total = 0;
    };
    return AttrData;
}());
exports.AttrData = AttrData;
//# sourceMappingURL=AttrData.js.map