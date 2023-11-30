function solution(array, n) {
    var answer = 0;
    let min = 101
    
    for(let i=0; i<array.length; i++){
        
        if(Math.abs(n - array[i]) < min){
            min = Math.abs(n - array[i])
            answer = array[i]
        } else if(Math.abs(n - array[i]) == min){
            answer = Math.min(answer, array[i])
        }
    }
    
    return answer;
}