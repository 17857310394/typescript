import { Affix } from "../Affix/Affix";
import { EComp } from "../Define";
import { EventDelegate } from "../Event/EventDelegate";
import { Modifier } from "../Modifier/Modifier";

export interface IComponent {
    // 定义组件接口
    objectName:string;

    GetCompTy():EComp;
    AddAffix(affix:Affix):void;
    RemoveAffix(affix:Affix):void;
}

export class BaseCompent implements IComponent{
    
    public affixs:Affix[]=[];
    objectName: string="BaseCompent";
    eventDelegate:EventDelegate<string>=undefined;

    public constructor(){
        this.eventDelegate=new EventDelegate<string>();
    }

    public AddAffix(affix: Affix): void {
        throw new Error("Method not implemented.");
    }
    public RemoveAffix(affix: Affix): void {
        throw new Error("Method not implemented.");
    }

    public GetCompTy():EComp{
        return EComp.None;
    }

    public addListener(event:string,listener: (...args: any[]) => void){
        this.eventDelegate.addEventListener(event,listener);
    }

    public removeListener(event:string,listener: (...args: any[]) => void){
        this.eventDelegate.removeEventListener(event,listener);
    }

    // public removeListener(event:string,listener: (...args: any[]){
        
    // }
}