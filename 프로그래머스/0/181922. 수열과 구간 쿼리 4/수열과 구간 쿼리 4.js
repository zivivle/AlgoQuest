function solution(arr, queries) {
    var answer = [...arr];
    
    // arr	
    // [0, 1, 2, 4, 3]	
    
    // queries
    // [[0, 4, 1],[0, 3, 2],[0, 3, 3]]
    
    for(let i=0; i<queries.length; i++){
        for(let j=queries[i][0]; j<=queries[i][1]; j++){
    // j가 queries[i][2]의 배수인 경우 arr[j]++
            if(j % queries[i][2] === 0){
                answer[j]++
            }
        }
    }
    
    return answer;
}