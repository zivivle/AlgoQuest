function solution(arr) {
    var answer = [];
    let copy = [...arr]
    let smallNum = copy.sort((a, b) => a - b)[0]
        
    if(arr.length == 1) answer = [-1]
    else {
        answer = arr.filter(num => num != smallNum)
    }
        
    return answer;
}