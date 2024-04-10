function solution(arr)
{
    var answer = [];
    let tem = 10

    // 1, 1, 3, 3, 0, 1, 1
    for(let i=0; i<arr.length; i++){
        // [1, 3, 0, 1]
        // tem = 1
        if(arr[i] != tem) {
            answer.push(arr[i])
            tem = arr[i]
        }
        // tem = 1
        else tem = arr[i]
    }
    
    return answer;
}