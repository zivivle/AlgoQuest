
function solution(n, m) {
    var answer = [];
    let largerNumber = Math.max(n, m)
    const smallerNumber = Math.min(n, m)
    
    function gcd(a, b) {
        // b가 0이 아닐 때까지 반복
        while (b != 0) {
            // b를 temp에 임시 저장
            let temp = b;
            // a를 b로 나눈 나머지를 b에 저장
            b = a % b;
            // temp (원래 b의 값)을 a에 저장
            a = temp;
        }
        // 나머지가 0이 되었을 때 a는 최대공약수
        return a;
    }
    // 최대공약수 = 3
    // 3의 약수 [1, 3] 과 12의 약수 [1, 2, 3, 4, 6, 12] 중 공통되는 수를 찾고 그 중 가장            큰 숫자를 반환
    let num1 = gcd(smallerNumber, largerNumber)
    let num2 = smallerNumber * largerNumber / num1
    
    
    return answer = [num1, num2];
}