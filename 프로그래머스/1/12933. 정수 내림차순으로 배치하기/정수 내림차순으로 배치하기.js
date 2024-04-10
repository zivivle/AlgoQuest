function solution(n) {
    var answer = 0;
    let strN = String(n)
    
    answer = strN.split('').sort((a, b) => b - a).join('')

    
    return Number(answer);
}