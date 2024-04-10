function solution(s) {
    var answer = false;
    let lengthFlag = false
    let numberFlag = false
    
    if(s.length == 4) lengthFlag = true;
    else if(s.length == 6) lengthFlag = true;
    else lengthFlag = false;
    
    numberFlag = s.split('').every(n => !isNaN(n))
    
    if(lengthFlag && numberFlag) answer = true
    
    return answer;
}