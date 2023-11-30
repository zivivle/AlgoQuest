function solution(my_string) {
    var answer = 0;
    let number = ''
    let arr = []
    
    for(let x of my_string){
        if(!isNaN(x) ) number += x
        else {
            arr.push(number)
            number = ''
        }
    }
    
    if (number !== '') {
        arr.push(number);
    }
    
    if(arr.length == 0) answer = 0
    else {
        for(let y of arr){
        answer += Number(y)
    }
    }
    
    return answer;
}