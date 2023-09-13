"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Define_1 = require("../Define");
var Affix = /** @class */ (function () {
    function Affix(ea, mods) {
        this.mods = mods;
        this.ec = ea;
    }
    Affix.prototype.Apply = function (entity) {
        var comp = entity.GetComp(Define_1.CompDefine.eCompMap.get(this.ec));
        if (comp) {
            comp.AddAffix(this);
        }
    };
    return Affix;
}());
exports.Affix = Affix;
//# sourceMappingURL=Affix.js.map