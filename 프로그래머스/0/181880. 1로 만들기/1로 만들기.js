function solution(num_list) {
    var answer = 0;
    
    for(let i=0; i<num_list.length; i++){
        let num = num_list[i];
        while(num != 1){
            if(num%2 == 1){
                num = (num - 1) / 2
                answer++
            }
            if(num%2 == 0) {
                num = num / 2
                answer++
            }
        }
    }
    
    return answer;
}