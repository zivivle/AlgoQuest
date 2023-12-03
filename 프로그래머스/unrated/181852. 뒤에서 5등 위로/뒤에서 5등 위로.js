function solution(num_list) {
    var answer = [];
    let arr = [...num_list]
    arr.sort((a, b) => a - b)
    
    for(let i=5; i<arr.length; i++){
        answer.push(arr[i])
    }
    
    return answer;
}