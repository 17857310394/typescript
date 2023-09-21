"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tool_1 = require("../tools/tool");
// 算法思想：https://www.ruanyifeng.com/blog/2013/05/boyer-moore_string_search_algorithm.html
function ArithmeticBM(targetString, findString) {
    var targetLen = targetString.length;
    var findLen = findString.length;
    var left = 0, k = findLen - 1, right = k; //left、right表示target的索引 k表示find的索引
    var m = 0, n = 0;
    while (k >= 0 && right < targetLen) {
        if (k == 0) { //全部匹配
            return left;
        }
        if (targetString[right] == findString[k]) {
            right--;
            k--;
        }
        else {
            //说明已经有字符匹配上了 选择性采用好后缀规则
            if (k < findLen - 1) {
                var goodSuffix = findString.substring(k + 1);
                var tempStr = findString.substring(0, k + 1);
                var start = ArithmeticBM(goodSuffix, tempStr); //start>0说明有匹配字符
                if (start >= 0)
                    m = k + 1 - start; //后移位数
                else if (goodSuffix[goodSuffix.length - 1] == tempStr[0]) {
                    m = findString.length - 1;
                }
                else
                    m = findString.length;
            }
            //坏字符规则 坏字符位置-上一次出现位置
            n = 1;
            while (k - n >= 0) {
                if (findString[k - n] == targetString[right]) {
                    break;
                }
                n++;
            }
            left += Math.max(m, n);
            right = left + findLen - 1;
            k = findLen - 1;
            m = 0;
        }
    }
    return -1;
}
// function ArithmeticBM(targetString: string, findString: string): number {
//     const targetLen = targetString.length;
//     const findLen = findString.length;
//     let left = 0, k = findLen - 1, right = k;
//     while (right < targetLen) {
//       let mismatchIndex = -1;
//       let isMatch = true;
//       for (let i = k; i >= 0; i--) {
//         if (findString[i] !== targetString[right - k + i]) {
//           mismatchIndex = i;
//           isMatch = false;
//           break;
//         }
//       }
//       if (isMatch) {
//         return left;
//       }
//       let badCharJump = findLen - 1 - mismatchIndex;
//       const goodSuffix = findString.substring(mismatchIndex + 1);
//       const tempStr = findString.substring(0, mismatchIndex + 1);
//       let goodSuffixJump = 0;
//       if (mismatchIndex < findLen - 1) {
//         const start = ArithmeticBM(goodSuffix, tempStr);
//         if (start >= 0) {
//           goodSuffixJump = findLen - 1 - start;
//           badCharJump = Math.max(badCharJump, goodSuffixJump);
//         } else {
//           if (goodSuffix[goodSuffix.length - 1] === tempStr[0]) {
//             goodSuffixJump = findLen - 1;
//           } else {
//             goodSuffixJump = findLen;
//           }
//         }
//       }
//       left += Math.max(goodSuffixJump, badCharJump);
//       right = left + findLen - 1;
//       k = findLen - 1;
//     }
//     return -1;
//   }
//var str1=fs.readFileSync("./script/demo04_BM/i18n.txt",{encoding:"utf-8"});
var str1 = "ssx WORD_3277  dz";
var str2 = "WORD_3277";
tool_1.testFunctionTime(ArithmeticBM, str1, str2);
tool_1.testFunctionTime(function () { return str1.indexOf(str2); });
//# sourceMappingURL=app.js.map