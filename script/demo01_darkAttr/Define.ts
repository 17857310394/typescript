import { AttrCompent } from "./Compents/AttrCompent";
import { BaseCompent, IComponent } from "./Compents/BaseCompent";
import { ISingleton } from "./Singleton";

export enum EComp{
    None=0,
    Attr=1,
    Stat=2,
}

export enum EAttr{
    HP=101,
    MP=102,
    ATK=103,
    DEF=104,
    EVA=105,
}

export enum EAffix{
    DEF_UP=1,
}

export class CompDefine{
    public static eCompMap:Map<EComp,typeof BaseCompent> = new Map([
        [EComp.Attr,AttrCompent],
    ]);

}

