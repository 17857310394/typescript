var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function GetRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function GetRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
//错误 随机选取两个索引值 进行交换
//错误 遍历数组 随机选取一个值 进行交换
//换牌法
function FisherYateShuffle(list) {
    var n = list.length;
    for (var i = n - 1; i > 0; i--) {
        var k = Math.floor(Math.random() * (i + 1));
        var value = list[k];
        list[k] = list[i];
        list[i] = value;
    }
}
//插牌法
function FisherYateShuffle2(list) {
    var n = list.length;
    for (var i = 1; i < n; i++) {
        var k = Math.floor(Math.random() * (i + 1));
        var value = list[k];
        list[k] = list[i];
        list[i] = value;
    }
}
function testShuffle(arr, shuffle, testTime) {
    var testResult = [];
    var arrBackup = __spreadArrays(arr);
    var arrMap = new Map();
    var len = arr.length;
    for (var j = 0; j < len; j++) {
        arrMap.set(arr[j], j);
        testResult[j] = Array(len).fill(0);
    }
    for (var i = 1; i <= testTime; i++) {
        arrBackup.forEach(function (val, j) {
            arrBackup[j] = arr[j];
        });
        shuffle(arrBackup);
        arrBackup.forEach(function (val, j) {
            testResult[arrMap.get(val)][j]++;
        });
    }
    for (var i = 0; i < len; i++) {
        console.log(arr[i] + ":");
        for (var j = 0; j < len; j++) {
            console.log("" + testResult[i][j].toString().padStart(7));
        }
        console.log("\n");
    }
    console.log("----------------------------------");
}
var myList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
testShuffle(myList, FisherYateShuffle2, 10000);
//# sourceMappingURL=app.js.map