function solution(myString) {
    var answer = [];
    let strArr = myString.split('x')
    
    for(let x of strArr){
        answer.push(x.length)
    }
    
    return answer;
}