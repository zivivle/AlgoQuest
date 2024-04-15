function solution(sizes) {
    var answer = 0;
    for(let x of sizes){
        x.sort((a, b) => a - b)
    }
    
    let fir = []
    let sec = []
    for(let i=0; i<sizes.length; i++){
        fir.push(sizes[i][0])
        sec.push(sizes[i][1])
    }
    
    answer = Math.max(...fir) * Math.max(...sec)
    
    return answer;
}