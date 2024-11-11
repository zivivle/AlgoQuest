function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function solution(numer1, denom1, numer2, denom2) {
    // numer1/denom1  , numer2/denom2
    // numer1/denom1 * denom2,   numer2/denom2* denom1
    // 4/8 + 6/8 = 10/8 => 10과 8의 최대공약수로 나누면 5/4
    // 27/6 + 2/6 = 29/6 => 29와 6의 최대공약수로 나누면 29/6
    let temNumer = numer1 * denom2 + numer2 * denom1
    let temDenom = denom1 * denom2
    let gcdNum = gcd(temNumer, temDenom)
    
    return [temNumer/gcdNum, temDenom/gcdNum] ;
}