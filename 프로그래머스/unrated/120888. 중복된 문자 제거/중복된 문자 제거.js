function solution(my_string) {
    var answer = '';
    let set = new Set();
    for(let i=0; i<my_string.length; i++){
        set.add(my_string[i])
    }
    
    return answer = Array.from(set).join('')
}