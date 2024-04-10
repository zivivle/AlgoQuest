function solution(x) {
    var answer = true;
    let total = String(x).split('').map(Number).reduce((a, b) => {
        return a + b;
    }, 0)
    
    
    return answer = x % total == 0;
}