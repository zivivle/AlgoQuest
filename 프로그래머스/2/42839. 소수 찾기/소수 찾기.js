function solution(numbers) {
    const numSet = new Set();

    // 모든 자리 수의 숫자 조합 생성
    function generateCombinations(current, remaining) {
        if (current.length > 0) {
            numSet.add(parseInt(current));
        }
        for (let i = 0; i < remaining.length; i++) {
            generateCombinations(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }

    generateCombinations("", numbers);

    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 소수 개수 계산
    let primeCount = 0;
    for (let num of numSet) {
        if (isPrime(num)) {
            primeCount++;
        }
    }
    
    return primeCount;
}