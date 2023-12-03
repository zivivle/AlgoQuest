function fac(n, my_string, arr) {
    if(n == my_string.length) return
    let result = ''
    for(let i=n; i<my_string.length; i++){
        result += my_string[i]
    }
    arr.push(result)
    fac(n+1, my_string, arr)
}

function solution(my_string, is_suffix) {
    var answer = 0;
    let arr = [];
    
    fac(0, my_string, arr)
    
    if(arr.includes(is_suffix)) answer = 1
    
    return answer;
}