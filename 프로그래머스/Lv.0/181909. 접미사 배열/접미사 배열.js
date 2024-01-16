function solution(my_string) {
    var answer = [];
    let s = 0
    let n = my_string.length
    
    while(s != n){
        let string = ''
        for(let i=s; i<n; i++){
            string += my_string[i]
        }
        answer.push(string);
        s++;
    }
    
    return answer.sort();
}