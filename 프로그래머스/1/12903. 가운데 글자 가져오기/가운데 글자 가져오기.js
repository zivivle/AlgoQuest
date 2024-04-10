function solution(s) {
    var answer = '';
    
    // '12345678'
    
    if(s.length % 2 == 1){
        answer += s[Math.ceil(s.length / 2) - 1]
    } else {
        answer += s[s.length / 2 - 1];
        answer += s[s.length / 2];
    }
    
    return answer;
}