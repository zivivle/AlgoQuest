function solution(t, p) {
    var answer = 0;
    let arr = [];
     
    let leng = p.length; // p의 길이를 기준으로 부분 문자열을 추출

    function culNums(num) {
        if (num + leng > t.length) return; // 더 이상 부분 문자열을 추출할 수 없을 때 함수 종료
        let str = '';
        for (let i = num; i < num + leng; i++) {
            str += t[i]; // num 위치에서 시작하여 leng 길이만큼의 문자열을 생성
        }
        arr.push(str);
        culNums(num + 1); // 다음 위치에서 시작하는 부분 문자열을 위해 재귀 호출
    }
    
    culNums(0); // 초기 호출은 인덱스 0부터 시작


    console.log('arr', arr);
    
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i]) <= Number(p)){
            answer++
        }
    }
    
    return answer;
}