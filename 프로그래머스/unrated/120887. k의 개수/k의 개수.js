function solution(i, j, k) {
    var answer = 0;
    let arr = []
    
    for(let t=i; t<=j; t++){
        arr.push(String(t))
    }
    let kStr = String(k);
    for(let x of arr){
        for(let y of x){
            if(y == kStr) answer += 1
        }
    }
    
    return answer;
}