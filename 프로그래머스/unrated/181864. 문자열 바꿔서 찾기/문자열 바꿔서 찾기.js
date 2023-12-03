function solution(myString, pat) {
    var answer = 0;
    let change = ''
    
    for(let x of myString){
        if(x == 'A') change += 'B'
        if(x == 'B') change += 'A'
    }
    
    if(change.includes(pat)) answer = 1
    
    return answer;
}