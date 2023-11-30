function solution(emergency) {
    //[3, 76, 24]
    var answer = [];
    // [76, 24, 3]
    let arr = [...emergency].sort((a, b) => b - a);
    
    for(let i=0; i<emergency.length; i++){
        let findIndex = arr.indexOf(emergency[i]) + 1
        answer.push(findIndex)
    }
    
    
    return answer;
}