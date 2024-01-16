function solution(myString) {
    var answer = '';
    
    let newString = myString.toLowerCase()
    
    for(let x of newString){
        if(x == 'a') answer += 'A'
        else answer += x
    }
    
    return answer;
}