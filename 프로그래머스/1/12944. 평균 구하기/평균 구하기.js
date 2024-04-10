function solution(arr) {
    var answer = 0;
    
    let total = arr.reduce((a, b) => {
        return a + b
    }, 0)
    
    return answer = total/arr.length;
}