function solution(arr1, arr2) {
    var answer = 0;
    let arr1_total = arr1.reduce((a, b) => a + b, 0)
    let arr2_total = arr2.reduce((a, b) => a + b, 0)
    
    if(arr1.length !== arr2.length){
        if(arr1.length > arr2.length) answer = 1
        else answer = -1
    } else {
        if(arr1_total > arr2_total) answer = 1
        if(arr2_total > arr1_total) answer = -1
    }
    
    return answer;
}