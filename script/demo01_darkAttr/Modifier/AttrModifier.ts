import { EAttr } from "../Define";
import { Modifier } from "./Modifier";

export class AttrModifier extends Modifier{
    fix:number=0;
    per:number=0;

    public constructor(target:EAttr,fix:number=0,per:number=0){
        super();

        this.target=target;
        this.fix=fix;
        this.per=per;
    }

    public Modify(data:any){
        data.fix+=this.fix;
        data.more+=this.per;
    }
}