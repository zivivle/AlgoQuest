function solution(strings, n) {
    var answer = [];
    
    strings.sort((a,b) => {
         const charA = a[n] || '';
      const charB = b[n] || '';

      if (charA === charB) {
        return a.localeCompare(b);
      }
      return charA.localeCompare(charB);
    })
    
    return answer = strings;
}