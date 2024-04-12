function solution(s, n) {
     var answer = '';
    
    let strArr = s.split('').map(char => {
        let code = char.charCodeAt(0);

        if (char >= 'A' && char <= 'Z') {
            // 대문자 처리
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
        } else if (char >= 'a' && char <= 'z') {
            // 소문자 처리
            return String.fromCharCode(((code - 97 + n) % 26) + 97);
        } else {
            // 그 외 문자는 변경 없음
            return char;
        }
    });

    answer = strArr.join('');
    
    return answer;
}