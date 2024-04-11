function solution(n) {
    let str = ""
    let answer = 0
    //  45를 3으로 나눕니다:
        // 몫: 15
        // 나머지: 0 (이것이 3진수의 가장 낮은 자릿수가 됩니다)
        // 15를 다시 3으로 나눕니다:
        // 몫: 5
        // 나머지: 0 (다음 자릿수)
        // 5를 3으로 나눕니다:
        // 몫: 1
        // 나머지: 2 (다음 자릿수)
        // 마지막으로 1을 3으로 나눕니다:
        // 몫: 0 (나눗셈 종료)
        // 나머지: 1 (가장 높은 자릿수)
    let copy = n
    while(copy != 0){
        let remainder = copy % 3; 
        str = String(remainder) + str;
        copy = parseInt(copy / 3);
    }
    
    // let reverseStr = str.split("").reverse().join("");
    
    // console.log('reverseStr', reverseStr)
    // 2 × 3^0 = 2
    // 0 × 3^1 = 0
    // 2 × 3^2 = 18
    // 1 × 3^3 = 27
    
    for(let i=0; i<str.length; i++){
        answer += Number(str[i]) * (3 ** i)
    }
    
    return answer;
}