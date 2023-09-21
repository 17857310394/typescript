function GetRandomInteger(min:number,max:number){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function GetRandomFloat(min:number,max:number){
    return Math.random()*(max-min)+min;
}

//错误 随机选取两个索引值 进行交换
//错误 遍历数组 随机选取一个值 进行交换

//换牌法
function FisherYateShuffle<T>(list:T[]):void{
    var n:number=list.length;
    for(var i=n-1;i>0;i--){
        const k=Math.floor(Math.random()*(i+1));
        const value=list[k];
        list[k]=list[i];
        list[i]=value;
    }
}

//插牌法
function FisherYateShuffle2<T>(list:T[]):void{
    var n:number=list.length;
    for(var i=1;i<n;i++){
        const k=Math.floor(Math.random()*(i+1));
        const value=list[k];
        list[k]=list[i];
        list[i]=value;
    }
}

type ShuffleFunction<T> = (arr: T[]) => void;

function testShuffle<T>(arr: T[], shuffle: ShuffleFunction<T>, testTime: number): void {
  const testResult: Array<Array<number>> = [];
  const arrBackup: T[] = [...arr];
  const arrMap: Map<T, number> = new Map();
  const len=arr.length;

  for (let j = 0; j < len; j++) {
    arrMap.set(arr[j], j);
    testResult[j] = Array(len).fill(0);
  }

  for (let i = 1; i <= testTime; i++) {
    arrBackup.forEach((val, j) => {
      arrBackup[j] = arr[j];
    });
    shuffle(arrBackup);
    arrBackup.forEach((val, j) => {
      testResult[arrMap.get(val)!][j]++;
    });
  }

  for (let i = 0; i < len; i++) {
    console.log(`${arr[i]}:`);
    for (let j = 0; j < len; j++) {
      console.log(`${testResult[i][j].toString().padStart(7)}`);
    }
    console.log("\n");
  }
  console.log("----------------------------------");
}

var myList:string[]=['A','B','C','D','E','F','G','H','I','J'];
testShuffle<string>(myList,FisherYateShuffle2,10000);

