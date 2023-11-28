let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let [n, m] = input[0].split(' ').map(Number)
let arr = [];
//[1, 2, 3, 4]
for(let i=1; i<=n; i++) arr.push(i)

let visited = new Array(n).fill(false);
let selected = []; // 현재 순열에 포한된 인덱스

let answer = ""
function fac(num, depth) {
    if(depth == m) {
        let result = []; // 순열 결과 저장
        for(let i of selected) result.push(arr[i])
        for(let x of result) answer += x + " "; 
        answer += "\n"
        return
    }
    for(let i=0; i<arr.length; i++){
        if(visited[i]) continue;
        selected.push(i) 
        visited[i] = true; 
        fac(arr, depth + 1);
        selected.pop();
        visited[i] = false;
    }
}
fac(arr, 0);
console.log(answer);