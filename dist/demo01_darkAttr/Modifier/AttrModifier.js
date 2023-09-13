"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Modifier_1 = require("./Modifier");
var AttrModifier = /** @class */ (function (_super) {
    __extends(AttrModifier, _super);
    function AttrModifier(target, fix, per) {
        if (fix === void 0) { fix = 0; }
        if (per === void 0) { per = 0; }
        var _this = _super.call(this) || this;
        _this.fix = 0;
        _this.per = 0;
        _this.target = target;
        _this.fix = fix;
        _this.per = per;
        return _this;
    }
    AttrModifier.prototype.Modify = function (data) {
        data.fix += this.fix;
        data.more += this.per;
    };
    return AttrModifier;
}(Modifier_1.Modifier));
exports.AttrModifier = AttrModifier;
//# sourceMappingURL=AttrModifier.js.map