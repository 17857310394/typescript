import { AttrData } from "../Data/AttrData";
import { Modifier } from "../Modifier/Modifier";

export class AttrVo{
    data:AttrData;

    mods:Modifier[]=[];
    binders:any[]=[];

    public constructor(){
        this.data=new AttrData();
    }

    public AddMod(mod:Modifier){
        this.mods.push(mod);
        this.UpdateMod();
    }

    public RemoveMod(mod:Modifier){
        for(var i:number=0;i<this.mods.length;i++){
            if(this.mods[i]==mod){
                this.mods.splice(i,1);
            }
        }
        this.UpdateMod();
    }

    public AddBinder(listener:(...args: any[]) => void){
        this.binders.push(listener);
    }

    public removeBinder(listener:(...args: any[]) => void){
        for(var i:number=0;i<this.binders.length;i++){
            if(this.binders[i]==listener){
                this.binders.splice(i,1);
            }
        }
    }

    public UpdateMod(){
        this.data.Init();
        
        for(var i:number=0;i<this.mods.length;i++){
            this.mods[i].Modify(this.data);
        }

        this.OnUpdateMod();
    }

    private OnUpdateMod(){
        this.binders.forEach(element => {
            element(this.data);
        });
    }
}