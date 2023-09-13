import { Affix } from "../Affix/Affix";
import { AttrData } from "../Data/AttrData";
import { AttrVo } from "../Entity/AttrVo";
import { EAttr, EComp } from "../Define";
import { BaseCompent } from "./BaseCompent";

export class AttrCompent extends BaseCompent{
    
    objectName: string="AttrCompent";
    data:AttrData;

    attrs:Map<EAttr,AttrVo>=new Map();

    public constructor(){
        super();
        this.Init();
    }

    private Init(){
        this.attrs.set(EAttr.ATK,new AttrVo());
        this.attrs.set(EAttr.DEF,new AttrVo());
        this.attrs.set(EAttr.EVA,new AttrVo());
        this.attrs.set(EAttr.HP,new AttrVo());
        this.attrs.set(EAttr.MP,new AttrVo());
    }

    public GetCompTy():EComp{
        return EComp.Attr;
    }

    public GetAttr(attr:EAttr):Attr{
        return this.attrs[attr];
    }

    public AddAffix(affix: Affix): void {
        affix.mods.forEach(element => {
            var attr:AttrVo=this.attrs.get(element.target);
            attr.AddMod(element);
        });
    }

    public RemoveAffix(affix:Affix):void{
        affix.mods.forEach(element => {
            var attr:AttrVo=this.attrs[element.target];
            attr.RemoveMod(element);
        });
    }

    public AddBinder(ea:EAttr,listener: (...args: any[]) => void){
        var attr:AttrVo=this.attrs.get(ea);
        if(attr){
            attr.AddBinder(listener);
        }
    }

    public RemoveBinder(ea:EAttr,listener: (...args: any[]) => void){
        var attr:AttrVo=this.attrs.get(ea);
        if(attr){
            attr.removeBinder(listener);
        }
    }
}