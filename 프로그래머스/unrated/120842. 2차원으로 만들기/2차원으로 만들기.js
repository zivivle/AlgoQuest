function fac(num, num_list, n, answer) {
    if (num >= num_list.length) return; 
    let result = []
    for(let i=num; i<Math.min(num + n, num_list.length); i++){
        result.push(num_list[i])
    }
    answer.push(result)
    fac(num + n, num_list, n, answer)
}

function solution(num_list, n) {
    var answer = [];
    let num = 0
    
    fac(num, num_list, n, answer);
    return answer;
}