let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let number = Number(input[0])
let sumnum = 0
let cnt = 1

while(number > sumnum){
    cnt++;
    sumnum += cnt;
}
console.log(cnt-1)