function solution(n) {
    var answer = 0;
    if(n%2 == 1){
        for(let i=1; i<=n; i++){
            if(i%2 == 1){
              answer += i   
            }
        }
    } else {
        for(let i=1; i<=n; i++){
            // 2 4 6 8 10
            if(i%2 == 0){
                answer += i*i   
            }
        }
    }
    return answer;
}