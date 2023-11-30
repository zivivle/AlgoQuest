

function solution(n) {
    var answer = [];
    let set = new Set();
    let depth = 2;
    
    while(n > 1){
        if(n%depth == 0){
            set.add(depth)
            n /= depth;
        } else {
            depth += 1
        }
    }
    
    for(let x of set){
        answer.push(x)
    }
    
    return answer;
}