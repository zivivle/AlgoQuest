let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let testcase = Number(input[0])
let line = 1

for(let i=0; i<testcase; i++){
    let n = Number(input[line])
    let nums = []
    for(let j=line+1; j<=line+n; j++){
        let k = input[j].split(' ').map(Number)
        nums.push(k)
    }
    nums.sort((a, b) => a[0] - b[0]);
    
    let min = 100001;
    let cnt = 0;
    for(let x of nums){
        if(x[1]<min) {
          min = x[1];
          cnt++
        }
    }
    console.log(cnt)
    line += n + 1;
}