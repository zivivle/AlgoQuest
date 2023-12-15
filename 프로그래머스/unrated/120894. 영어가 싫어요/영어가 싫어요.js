function solution(numbers) {
    var answer = '';
    
    let nums = {
        'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
        'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
    };

    let currentWord = ''
    // 입력된 문자열을 순회
    for (let char of numbers) {
        currentWord += char; // 현재 문자 추가
        // 만약 현재 단어가 nums 객체에 있다면, 해당 숫자로 변환
        if (currentWord in nums) {
            answer += nums[currentWord];
            currentWord = ''; // 단어 초기화
        }
    }
    return Number(answer);
}