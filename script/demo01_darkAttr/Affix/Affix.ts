import { CompDefine, EComp } from "../Define";
import { Entity } from "../Entity/Entity";
import { Modifier } from "../Modifier/Modifier";

export class Affix{
    mods:Modifier[];
    ec:EComp;

    public constructor(ea:EComp,mods:Modifier[]){
        this.mods=mods;
        this.ec=ea;
    }

    public Apply(entity:Entity):void{
        var comp=entity.GetComp(CompDefine.eCompMap.get(this.ec));
        if(comp){
            comp.AddAffix(this);
        }
    }
}