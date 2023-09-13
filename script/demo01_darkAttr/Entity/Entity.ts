import { IComponent } from "../Compents/BaseCompent";

type Constructor<T> = new () => T; //表示一个带有无参构造函数的类

export class Entity{
    //private compDict: Map<EComp, IComponent> = new Map<EComp, IComponent>();
    private compents:[any,IComponent][]=[];
    public AddComp<T extends IComponent>(comp: Constructor<T>,instance?:T): T {
        if(!instance){
          instance=new comp();
        }
      
        this.compents.push([comp,instance]);
        return instance;
      }
    
      public RemoveComp(comp: IComponent): Boolean {
        if(comp){
          for(var i=0;i<this.compents.length;i++){
            const element=this.compents[i];
            if(element[1]==comp){
              this.compents.splice(i,1);
              return true;
            }
          }
        }
        return false;
      }
    
      public GetComp<T extends IComponent>(comp: Constructor<T>): T {
        for(var i=0;i<this.compents.length;i++){
          const element=this.compents[i];
          if(element[0]==comp){
            return element[1] as T;
          }
        }
        return undefined;
      }
}