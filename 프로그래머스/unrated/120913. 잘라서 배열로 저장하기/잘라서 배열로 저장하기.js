function fac(str, depth, answer, n) {
    let result = ''
    if(depth >= str.length) return
    for(let i=depth; i<depth + n; i++){
        if(str[i] != undefined){
            result += str[i]
        }
    }
    answer.push(result)
    result = ''
    fac(str, depth + n, answer, n)
}

function solution(my_str, n) {
    var answer = [];

    fac(my_str, 0, answer, n)
    
    return answer;
}