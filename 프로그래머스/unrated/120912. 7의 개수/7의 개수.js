function solution(array) {
    var answer = 0;
    
    for(let x of array){
        for(let y of String(x)){
            if(y == '7') answer += 1
        }
    }
    
    return answer;
}