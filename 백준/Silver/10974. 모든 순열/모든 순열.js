let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])

let arr = []
for(let i=1; i<=n; i++) arr.push(i)

let visited = new Array(n).fill(false)
let selected = [];

let answer = ""
function fac(arr, depth){
    if(depth == n){
        for(let x of selected) answer += x + " ";
        answer += "\n"
        return;
    }
    for(let i=0; i<arr.length; i++){
        if(visited[i]) continue;
        selected.push(arr[i])
        visited[i] = true;
        fac(arr, depth + 1)
        selected.pop();
        visited[i] = false;
    }
}
fac(arr, 0)
console.log(answer)