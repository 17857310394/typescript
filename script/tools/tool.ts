export function testFunctionTime(callback: (...args: any[]) => any, ...args: any[]){
    const startTime = process.hrtime();
    var result=callback(...args);
    const endTime = process.hrtime(startTime);

    const seconds = endTime[0];
    const nanoseconds = endTime[1];
    const milliseconds = nanoseconds / 1000000;

    console.log(`函数执行结果：${result}`);
    console.log(`函数执行时间：${seconds}秒 ${milliseconds}毫秒`);
}