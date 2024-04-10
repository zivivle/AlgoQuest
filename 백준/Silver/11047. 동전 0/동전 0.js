let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let [coinLength, number] = input[0].split(' ').map(Number);

let coins = [];
for(let i=1; i<=coinLength; i++) {
    coins.push(Number(input[i]));
};

let cnt = 0;
for(let j=coinLength-1; j>=0; j--){
    cnt += parseInt(number / coins[j]);
    number %= coins[j];
}

console.log(cnt);