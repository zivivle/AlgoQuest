function solution(left, right) {
    var answer = 0;
    
    // nums = [13, 14, 15, 16, 17]
    let nums = []
    for(let i=left; i<=right; i++) nums.push(i)
    
    
    for(let x of nums){
        let cnt = 0
        for(let i=1; i<=x; i++){
            if(x%i == 0) cnt++
        }
        if(cnt%2 == 0) answer += x
        else answer -= x
    }
    
    return answer;
}