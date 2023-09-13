import { Affix } from "./Affix";
import { AttrModifier } from "../Modifier/AttrModifier";
import { EAffix, EAttr, EComp } from "../Define";

export class AffixFactory{
    public static GenAffix(id:number):Affix{
        var affix:Affix=undefined;
        var mods:AttrModifier[]=[];

        switch(id){
            //提高防御
            case EAffix.DEF_UP:
                mods.push(new AttrModifier(EAttr.DEF,20));
                affix=new Affix(EComp.Attr,mods);
                break;
            default:
                break;
        }
        
        return affix;
    }
}