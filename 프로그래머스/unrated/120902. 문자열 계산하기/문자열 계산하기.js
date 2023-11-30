function solution(my_string) {
    var answer = 0;
    // 3 - 4 + 1
    // ['3', '-', '4', '+', '1']
    let arr = my_string.split(' ')
    
    while(arr.length > 1) {
       for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '+' || arr[i] == '-') {
                let result = 0;
                if (arr[i] == '+') {
                    result = Number(arr[i - 1]) + Number(arr[i + 1]);
                } else if (arr[i] == '-') {
                    result = Number(arr[i - 1]) - Number(arr[i + 1]);
                }
                arr.splice(i - 1, 3, result.toString());
                i--; // 배열이 수정되었으므로 인덱스 조정
            }
        }
    }
    
    
    
    return answer = Number(arr[0])
}