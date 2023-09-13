export class AttrData{
    fix:number = 0; //固定
	more:number = 0; //修正
	total:number = 0; //总增

    public get value(){
        return this.fix * (1 + this.more) * (1 + this.total);
    }

    public Init(){
        this.fix=0;
        this.more=0;
        this.total=0;
    }
}