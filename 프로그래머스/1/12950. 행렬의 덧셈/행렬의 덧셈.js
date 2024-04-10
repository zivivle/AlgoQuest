function solution(arr1, arr2) {
    var answer = [];
    // [ arr1[0][0] + arr2[0][0], arr1[0][1] + arr2[1], ...arr1.length보다 작을때까지 ]
    // 해당 arr값을 answer.push해서 추가해주기
    
    for(let i=0; i<arr1.length; i++){
        let arr = []
        for(let j=0; j<arr1[i].length; j++){
            arr.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(arr)
    }
    
    return answer;
}