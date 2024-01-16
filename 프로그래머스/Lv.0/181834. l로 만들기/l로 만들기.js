function solution(myString) {
    var answer = '';
    
    for(let i=0; i<myString.length; i++){
        let num = myString.charCodeAt(i)
        if(num < 108){
            answer += 'l'
        } else {
            answer += myString[i]
        }
    }
    
    return answer;
}