function solution(board) {
    const arr = board.flatMap((row, i) => 
  row.map((value, j) => ({ value, i, j }))
)
    console.log('board', arr)
    
    const parsedArr = arr.filter(obj => obj.value != 1)
    
    console.log('parsed', parsedArr)
    
   
    return 0;
}