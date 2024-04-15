function solution(s) {
    let nums = {
        zero: 0, 
        one: 1, 
        two: 2, 
        three: 3, 
        four: 4, 
        five: 5, 
        six: 6, 
        seven: 7, 
        eight: 8, 
        nine: 9
    }
    var answer = '';
    
    let str = ''
    for(let i=0; i<s.length; i++){
        if(Number.isInteger(+s[i])) answer += s[i]
        else {
            str += s[i]
            if(nums[str] != undefined) {
                answer += nums[str]
                str = ''
            }
        }
    }
    

    return +answer;
}