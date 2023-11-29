function solution(n, control) {
    var answer = n;
    
    for(let x of control){
        if(x == 'w') answer += 1
        if(x == 's') answer -= 1
        if(x == 'd') answer += 10
        if(x == 'a') answer -= 10
    }
    
    return answer;
}