function maxminPoint(length) {
    let num = (length - 1) / 2
    return [-num, num];
}

function solution(keyinput, board) {
    let pointX = 0
    let pointY = 0

    // board의 최대/최소 포인트 계산 (중앙이 [0,0]이므로 양쪽으로 (board 크기 - 1) / 2 만큼 이동 가능)
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);

    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === 'up' && pointY < maxY) {
            pointY++;
        } else if (keyinput[i] === 'down' && pointY > -maxY) {
            pointY--;
        } else if (keyinput[i] === 'left' && pointX > -maxX) {
            pointX--;
        } else if (keyinput[i] === 'right' && pointX < maxX) {
            pointX++;
        }
    }

    
    return [pointX, pointY];
}