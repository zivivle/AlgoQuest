let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let num = Number(input[0])
//[0, 1, 1, 2, ]
let arr = [0, 1]

for(let i=2; i<=num; i++){
    arr.push(arr[i-1] + arr[i-2])
}

console.log(arr[num])