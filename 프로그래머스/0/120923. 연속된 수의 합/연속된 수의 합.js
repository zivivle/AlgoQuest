function solution(num, total) {
    const mid = Math.floor(total / num); 
    const start = mid - Math.floor((num - 1) / 2);
    return Array.from({ length: num }, (_, i) => start + i);
}