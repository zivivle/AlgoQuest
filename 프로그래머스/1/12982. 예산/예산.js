function solution(d, budget) {
    var answer = 0;
    let arr = d.sort((a, b) => a - b);
    
    let num = budget
    for(let i=0; i<arr.length; i++){
        num = num - arr[i]
        if(num >= 0) {
            answer++;
        }
        
    }
    
    
    return answer;
}