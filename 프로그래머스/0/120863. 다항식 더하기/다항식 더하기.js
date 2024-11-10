function solution(polynomial) {
    var answer = '';
    const arrP = polynomial.split(' ')
    let xNum = 0
    let num = 0
    
    for(let i=0; i<arrP.length; i++){
          
        if(arrP[i].includes('x')){
            if(arrP[i] == 'x'){
                xNum += 1
            } else {
                let temXnum = arrP[i].replace('x', ''); // 'x' 앞의 숫자만 추출
                xNum += Number(temXnum);
            }
        } else if(arrP[i] == '+'){
            // console.log('+', arrP[i])
        } else {
            num += Number(arrP[i])
        }
    }
    
    if (xNum !== 0 && num !== 0) {
        answer = (xNum === 1 ? 'x' : `${xNum}x`) + ' + ' + num;
    } else if (xNum !== 0) {
        answer = xNum === 1 ? 'x' : `${xNum}x`;
    } else {
        answer = String(num);
    }
    
    return answer ;
}