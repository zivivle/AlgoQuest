function solution(s) {
    var answer = [];
    let arr = s.split(' ')
    
    for(let x of arr){
        let tem = ''
        for(let i=0; i<x.length; i++){
            if((i+1)%2 == 1){
                tem += x[i].toUpperCase()
            } else {
                tem += x[i].toLowerCase()
            }
        }
        answer.push(tem)
    }
    
    console.log(answer.join(' '))
    return answer.join(' ');
}