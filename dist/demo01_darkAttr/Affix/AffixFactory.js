"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Affix_1 = require("./Affix");
var AttrModifier_1 = require("../Modifier/AttrModifier");
var Define_1 = require("../Define");
var AffixFactory = /** @class */ (function () {
    function AffixFactory() {
    }
    AffixFactory.GenAffix = function (id) {
        var affix = undefined;
        var mods = [];
        switch (id) {
            //提高防御
            case Define_1.EAffix.DEF_UP:
                mods.push(new AttrModifier_1.AttrModifier(Define_1.EAttr.DEF, 20));
                affix = new Affix_1.Affix(Define_1.EComp.Attr, mods);
                break;
            default:
                break;
        }
        return affix;
    };
    return AffixFactory;
}());
exports.AffixFactory = AffixFactory;
//# sourceMappingURL=AffixFactory.js.map