function solution(array) {
    const temArr = new Array(1001).fill(0);
    
    for(let i=0; i<array.length; i++){
        temArr[array[i]]++
    }
    
    const maxNum = Math.max(...temArr)
    const manyNum = temArr.findIndex(num => num == maxNum)
    const manyNumLength = temArr.filter(num => num == maxNum).length
    
    return manyNumLength > 1 ? -1 : manyNum;
}