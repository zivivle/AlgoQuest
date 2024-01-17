function solution(arr, intervals) {
    var answer = [];
    
    let [arr1, arr2] = intervals
    
    for(let i=arr1[0]; i<=arr1[1]; i++){
        answer.push(arr[i])
    }
    
    for(let j=arr2[0]; j<=arr2[1]; j++){
        answer.push(arr[j])
    }
    
    return answer;
}