function solution(s) {
    var answer = 0;
    let num = 0
    
    if(s.includes('-')){
        num = Number(s.slice(1))
        answer = -num
    }
    
    if(s.includes('+')){
        num = Number(s.slice(1))
        answer = num
    }
    
    answer = Number(s)
    
    return answer;
}