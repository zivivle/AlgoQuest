function solution(s) {
    var answer = '';
    
    let low = []
    let up = []
    
    for(let x of s){
        if(x == x.toUpperCase()) up.push(x)
        else low.push(x)
    }
    
    answer += low.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')
    answer += up.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')
    
    return answer;
}