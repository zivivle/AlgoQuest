function solution(chicken) {
    var answer = 0;
    let restC = chicken
    
    while(restC >= 10){
        answer = answer + Math.floor(restC / 10)
        if(restC % 10 > 0){
          restC = Math.floor(restC / 10) + (restC % 10)
        } else {
          restC = Math.floor(restC / 10)   
        }
    }
    
    return answer;
}