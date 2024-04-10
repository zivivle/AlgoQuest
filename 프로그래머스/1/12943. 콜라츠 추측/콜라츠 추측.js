function solution(num) {
    var answer = 0;
    let copy = num;
    
    // num이 짝수면 num / 2
    // num이 홀수면 num * 3 + 1
    // num == 1이면 일때까지 answer++
    // answer >= 500 stop; answer = -1
    
    while(copy != 1 && answer < 502){
        if(copy%2 == 0) {
            copy /= 2;
            answer++
        }
        else {
            copy = copy * 3 + 1
            answer++
        }
    }
    
    if(answer > 500) answer = -1
    
    return answer;
}