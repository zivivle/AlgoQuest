function absLineLength(num1, num2) {
    return Math.abs(num1 - num2)
}

function solution(dots) {
    
    let xValues = dots.map(dot => dot[0]);
    let yValues = dots.map(dot => dot[1]);
    
    let lineX = absLineLength(Math.max(...xValues), Math.min(...xValues));
    let lineY = absLineLength(Math.max(...yValues), Math.min(...yValues));
    
    return lineX * lineY;
}