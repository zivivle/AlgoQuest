function solution(n) {
    var answer = [n];
    let num = n
    
    while(num != 1){
        
        if(num%2 == 0){
           num = num / 2
           answer.push(num)
        } else {
            num = 3 * num + 1
            answer.push(num)
        }
    }
    
    return answer;
}