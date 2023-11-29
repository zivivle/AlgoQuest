function solution(my_string, is_prefix) {
    var answer = 0;
    let result = ''
    
    for(let x of my_string){
        result += x
        if(result == is_prefix){
            answer = 1;
            break;
        } else {
            answer = 0;
        }
        
    }
    
    return answer;
}