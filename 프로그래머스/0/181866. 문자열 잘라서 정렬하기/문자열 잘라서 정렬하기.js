function solution(myString) {
    var answer = [];
//     let copy = myString
    
//     if(copy[0] == 'x') copy = copy.slice(1)
//     if(copy[myString.length - 1] == 'x') copy = copy.slice(0, -1)
//     if(copy[0] == 'x' && copy[myString.length - 1] == 'x') copy = copy.slice(1, -1)
    
    return myString.split('x').filter(s => s !== '').sort()
}