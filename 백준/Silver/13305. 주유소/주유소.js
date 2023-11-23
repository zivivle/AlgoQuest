let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let n = Number(input[0])
let dist = input[1].split(' ').map(Number);
let cost = input[2].split(' ').map(Number);

// minPrice 5
let minCost = cost[0]
for(let i=0; i<n; i++){
    minCost = Math.min(minCost, cost[i]);
    cost[i] = minCost;
}

let result = BigInt(0);
for(let j=0; j < n - 1; j++){
    result += BigInt(dist[j]) * BigInt(cost[j]);
}
console.log(String(result));
