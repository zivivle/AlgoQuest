function solution(s) {
    var answer = 0;
    //[1, 2, Z, 3]
    let arr = s.split(' ')
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] != 'Z'){
            answer += Number(arr[i])
        } else {
            answer -= Number(arr[i-1])
        }
    }
    
    return answer;
}