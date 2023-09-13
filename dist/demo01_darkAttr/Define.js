"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AttrCompent_1 = require("./Compents/AttrCompent");
var EComp;
(function (EComp) {
    EComp[EComp["None"] = 0] = "None";
    EComp[EComp["Attr"] = 1] = "Attr";
    EComp[EComp["Stat"] = 2] = "Stat";
})(EComp = exports.EComp || (exports.EComp = {}));
var EAttr;
(function (EAttr) {
    EAttr[EAttr["HP"] = 101] = "HP";
    EAttr[EAttr["MP"] = 102] = "MP";
    EAttr[EAttr["ATK"] = 103] = "ATK";
    EAttr[EAttr["DEF"] = 104] = "DEF";
    EAttr[EAttr["EVA"] = 105] = "EVA";
})(EAttr = exports.EAttr || (exports.EAttr = {}));
var EAffix;
(function (EAffix) {
    EAffix[EAffix["DEF_UP"] = 1] = "DEF_UP";
})(EAffix = exports.EAffix || (exports.EAffix = {}));
var CompDefine = /** @class */ (function () {
    function CompDefine() {
    }
    CompDefine.eCompMap = new Map([
        [EComp.Attr, AttrCompent_1.AttrCompent],
    ]);
    return CompDefine;
}());
exports.CompDefine = CompDefine;
//# sourceMappingURL=Define.js.map