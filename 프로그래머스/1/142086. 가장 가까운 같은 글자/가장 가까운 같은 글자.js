function solution(s) {
    var answer = [];
    
    let numInfo = {}
    let result = []
    
    for(let i=0; i<s.length; i++){
        let char = s[i]
        console.log('char', char)
        if(numInfo.hasOwnProperty(char)){
            result.push(i - numInfo[char])
        } else {
            result.push(-1)
        }
        numInfo[char] = i
    }
    
    
    return answer = result;
}