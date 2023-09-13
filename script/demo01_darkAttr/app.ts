import { AffixFactory } from './/Affix/AffixFactory'
import { AttrData } from "./Data/AttrData";
import { AttrCompent } from "./Compents/AttrCompent";
import { EAffix, EAttr } from "./Define";
import { Entity } from "./Entity/Entity";

var entity:Entity=new Entity();
var comp=entity.AddComp(AttrCompent);
comp.AddBinder(EAttr.DEF,onUpdate);

var affix=AffixFactory.GenAffix(EAffix.DEF_UP);
affix.Apply(entity);
console.log("sxx");

function onUpdate(data:AttrData):void{
    console.log(data.fix);
}

