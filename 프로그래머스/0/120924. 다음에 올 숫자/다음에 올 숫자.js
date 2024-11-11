function solution(common) {
    var answer = 0;
    const arr = common
    let num1 = arr[1] - arr[0]
    let num2 = arr[2] - arr[1]
    let num3 = Math.floor(arr[1] / arr[0])
    // 등차수열인 경우
    if(num1 == num2){
        answer = arr[arr.length - 1] + num1
    } else {
        // 등비수열인 경우
        answer = arr[arr.length - 1] * num3
    }
    
    
    
    return answer;
}