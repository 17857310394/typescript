"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AffixFactory_1 = require(".//Affix/AffixFactory");
var AttrCompent_1 = require("./Compents/AttrCompent");
var Define_1 = require("./Define");
var Entity_1 = require("./Entity/Entity");
var entity = new Entity_1.Entity();
var comp = entity.AddComp(AttrCompent_1.AttrCompent);
comp.AddBinder(Define_1.EAttr.DEF, onUpdate);
var affix = AffixFactory_1.AffixFactory.GenAffix(Define_1.EAffix.DEF_UP);
affix.Apply(entity);
console.log("sxx");
function onUpdate(data) {
    console.log(data.fix);
}
//# sourceMappingURL=app.js.map