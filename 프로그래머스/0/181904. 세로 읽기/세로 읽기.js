function solution(my_string, m, c) {
    var answer = '';
    let plus = 0
    // 4
    let length = m - 1
    
    let arr = []
    // 1. m 으로 나누기
    // 2. m으로 나눈 스트링들이 있는 배열에서 각 요소마다 접급해서 
    // 3. 각 스트링의 c-1번째 요소들을 answer에 더하기
    
    if(m == 1 && c == 1){
        answer = my_string
    } else {
        while(plus < my_string.length){
          let str = ''
          for(let i = plus; i < plus + m && i < my_string.length; i++){
              str += my_string[i];
          }
          for(let i=plus; i<length; i++){
              str += my_string[i]
          }
          arr.push(str)
          plus = plus + m
          length = length + m
        }
        for(let i=0; i<arr.length; i++){
            answer += arr[i][c - 1]
        }
    }
    
    return answer
}