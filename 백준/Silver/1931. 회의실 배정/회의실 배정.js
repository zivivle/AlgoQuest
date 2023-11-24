let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])
let arr = []

for(let i=1; i<=n; i++){
    arr.push(input[i].split(' ').map(Number))
}
arr.sort(function(a, b) {
    if(a[1] != b[1]) return a[1] - b[1]
    else return a[0] - b[0]
})

let cnt = 1 
let cur = 0
for(let j=1; j<arr.length; j++){
    if(arr[cur][1] <= arr[j][0]){
        cur = j
        cnt += 1;
    }
}
console.log(cnt)