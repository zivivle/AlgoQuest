function solution(slice, n) {
    var answer = 1;
    
    for(let i=1; i<100; i++){
        if(slice*i/n >= 1){
            break;
        } else {
            answer++
        }
    }
    
    return answer;
}