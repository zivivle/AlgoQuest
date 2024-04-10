function solution(n) {
    var answer = 0;
    let sqrtN = Math.sqrt(n)
    
    if(!Number.isInteger(sqrtN)) answer = -1
    else answer = (sqrtN + 1) ** 2;
    
    return answer;
}