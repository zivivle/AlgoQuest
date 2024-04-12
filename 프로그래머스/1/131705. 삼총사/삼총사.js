function solution(number) {
    var answer = 0;
    number.sort((a, b) => a - b);
    
    for(let i=0; i<number.length - 2; i++){
        for(let j=i + 1; j<number.length - 1; j++){
            for(let k= j + 1; k<number.length; k++){
                if (i != j && j != k && i != k) {  // 모든 인덱스가 서로 다를 때만 검사
                    if (number[i] + number[j] + number[k] == 0) {
                        answer++;  // 세 수의 합이 0일 경우 답을 증가
                    }
                }
            }
        }
    }
    
    return answer;
}