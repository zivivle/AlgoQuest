function solution(quiz) {
    var answer = [];
    
    for(x of quiz){
        // [ '3', '-', '4', '=', '-3' ]
        let cur = x.split(' ')
        // let nums = cur.map(Number).filter(num => !isNaN(num))
        let isTrue
        if(cur[1] == '-'){
            isTrue = Number(cur[0]) - Number(cur[2]) == Number(cur[4])
            answer.push(isTrue ? 'O' : 'X')
        } else if(cur[1] == '+'){
            isTrue = Number(cur[0]) + Number(cur[2]) == Number(cur[4])
            answer.push(isTrue ? 'O' : 'X')
        }
    }
    
    return answer;
}