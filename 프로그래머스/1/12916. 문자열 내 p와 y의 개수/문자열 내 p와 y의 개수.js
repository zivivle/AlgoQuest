function solution(s){
    var answer = true;

    let lows = s.toLowerCase()
    
    let pl = 0;
    let yl = 0;
    
    for(let x of lows){
        if(x == 'p') pl++;
        if(x == 'y') yl++;
    }
    
    answer = pl === yl

    return answer;
}