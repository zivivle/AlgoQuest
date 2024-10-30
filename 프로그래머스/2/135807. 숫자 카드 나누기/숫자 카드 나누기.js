function solution(arrayA, arrayB) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function gcdOfArray(arr) {
        return arr.reduce((acc, cur) => gcd(acc, cur));
    }

    function isNotDivisible(arr, divisor) {
        return arr.every(num => num % divisor !== 0);
    }

    const gcdA = gcdOfArray(arrayA);
    const gcdB = gcdOfArray(arrayB);

    let candidateA = isNotDivisible(arrayB, gcdA) ? gcdA : 0;
    let candidateB = isNotDivisible(arrayA, gcdB) ? gcdB : 0;

    return Math.max(candidateA, candidateB);
}