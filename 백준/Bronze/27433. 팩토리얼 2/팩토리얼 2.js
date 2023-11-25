let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);


function fac(num) {
    if (num <= 1) return 1
    return num * fac(num - 1);
}

console.log(fac(n))