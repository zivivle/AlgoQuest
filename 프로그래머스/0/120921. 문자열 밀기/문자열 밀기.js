function solution(A, B) {
    // 처음부터 A와 B가 같으면 0을 반환
    if (A === B) return 0;
    
    let pushStr = A;
    for (let i = 1; i <= A.length; i++) {
        pushStr = pushStr[pushStr.length - 1] + pushStr.slice(0, -1);
        
        if (pushStr === B) {
            return i;
        }
    }
    
    return -1;
}