function solution(numlist, n) {
    return numlist.sort((a, b) => { 
        const distA = Math.abs(n - a);
        const distB = Math.abs(n - b);
        
        // 거리 기준 정렬
        if (distA !== distB) {
            return distA - distB;
        }
        
        // 거리가 같을 경우 더 큰 수가 앞에 오도록 정렬
        return b - a;
    });
}