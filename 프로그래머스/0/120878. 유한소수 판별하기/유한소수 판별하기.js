function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(a, b) {
    var answer = 2;
    // 유클리드 호재법으로 최대공약수 구하기
    const minNumber = Math.min(a, b)
    const maxNumber = Math.max(a, b)
    const gcdNum = gcd(minNumber, maxNumber)
    
    let num = Math.floor(b / gcdNum)
    
    while(num % 2 == 0){
        num /= 2
    }
    
    while(num % 5 == 0){
        num /= 5
    }
    
    return num == 1 ? 1 : 2;
}