function solution(num_list) {
    var answer = 0;
    let length = num_list.length
    let result = 1;
    if(length >= 11){
        for(let i=0; i<length; i++){
            answer += num_list[i]
        }
    } else {
        for(let i=0; i<length; i++){
            result *= num_list[i]
        }
        answer = result
    }
    
    
    return answer;
}