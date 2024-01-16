function solution(n) {
    var answer = [];
    
    for(let i=0; i<n; i++){
        let nums = []
        for(let j=0; j<n; j++){
            if(i == j) nums.push(1)
            else nums.push(0)
        }
        answer.push(nums)
    }
    
    
    return answer;
}