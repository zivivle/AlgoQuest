

function solution(my_string) {
    let answer = Array.from({ length: 52 }, () => 0);
    const alphabetArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
    
    for(let i=0; i<my_string.length; i++){
        const char = my_string[i];
        if(alphabetArray.includes(char)){ 
            const index = alphabetArray.findIndex(str => str === char);
            answer[index] += 1;
        }
    }
    
    return answer;
}