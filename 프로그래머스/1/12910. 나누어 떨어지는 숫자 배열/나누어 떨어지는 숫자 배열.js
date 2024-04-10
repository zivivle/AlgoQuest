function solution(arr, divisor) {
    var answer = [];
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] % divisor == 0) answer.push(arr[i])
    }
    
    if(answer.length == 0) return answer = [-1]
    else return answer.sort((a, b) => a - b)
}