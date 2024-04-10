function solution(n)
{
    var answer = 0;
    let strN = String(n);
    
    for(let x of strN){
        answer += Number(x);
    }
    

    return answer;
}