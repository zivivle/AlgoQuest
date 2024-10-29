function getMax(a, b) {
    return a > b ? a : b;
}

function solution(n, m) {
    var answer = [];
    
    let max = Math.max(n, m)
    let min = Math.min(n, m)
    
    while (min !== 0) { 
        const mod = max % min 
        max = min
        min = mod
    }
    
    const gcd = max
    answer.push(gcd)
    const lcm = (n * m) / gcd
    answer.push(lcm)
    
    return answer;
}