function solution(n) {
    let parsed = []
    let i = 1;
    
    while (parsed.length < n) {
        if (i % 3 !== 0 && !String(i).includes('3')) {
            parsed.push(i);
        }
        i++; // i를 계속 증가
    }
    
    
    return parsed[n - 1]
}