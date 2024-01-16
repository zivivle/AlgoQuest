function solution(binomial) {
    var answer = 0;
    let binArr = binomial.split(' ');
    
    for(let i=0; i<binArr.length; i++){
        if(binArr.includes('+')) answer = Number(binArr[0]) + Number(binArr[2])
        else if(binArr.includes('-')) answer = Number(binArr[0]) - Number(binArr[2])
        else answer = Number(binArr[0]) * Number(binArr[2])
    }
    
    
    return answer;
}