function solution(price, money, count) {
    var answer = -1;
    // price 3
    // money 20
    // count 4
    // total 3*1 + 3*2 + 3*3 + 3*4 = 30
    // result 10
    
    let total = 0
    
    for(let i=1; i<=count; i++){
        total += price*i
    }
    
    let result = total - money
    if(result < 0) answer = 0
    else answer = result
    
    return answer;
}