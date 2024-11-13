function solution(board) {
    let temArr = board
    const n = board.length
    const dx = [0, 1, 1, 1, 0, -1, -1, -1]
    const dy = [-1, -1, 0, 1, 1, 1, 0, -1]
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            for(let d=0; d<dx.length; d++){
                let x = j + dx[d]
                let y = i + dy[d]
                
                if (y >= 0 && y < n && x >= 0 && x < n) {
                    if(temArr[i][j] == 1){
                        if(temArr[y][x] == 1) continue
                        temArr[y][x] = 2
                    }
                }
            }
        }
    }
    
    const result = temArr.flat().filter(x => x == 0)
    
    return result.length;
}