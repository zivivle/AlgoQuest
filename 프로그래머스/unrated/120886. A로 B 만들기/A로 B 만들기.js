function solution(before, after) {
    var answer = 0;
    //["o", "l", "l", "e", "h"]
    let newStr = after.split('')
    
    for(let x of before){
        let index = newStr.indexOf(x);
        if(index != -1){
            newStr.splice(index, 1)
        }
    }
    
    if(newStr.length == 0) answer = 1
    
    return answer;
}