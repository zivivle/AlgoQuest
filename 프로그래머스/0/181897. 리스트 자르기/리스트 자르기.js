function solution(n, slicer, num_list) {
    var answer = [];
    
    // 보통 스텝 간격을 처리할 때는 i += slicer[2] 형태로 증가시킴
    let sliceNumList
    switch (n) {
      case 1:
        sliceNumList = num_list.slice(0, slicer[1] + 1)
        answer = [...sliceNumList]
        break;
      case 2:
        sliceNumList = num_list.slice(slicer[0], num_list.length)
        answer = [...sliceNumList]
        break;
      case 3:
        sliceNumList = num_list.slice(slicer[0], slicer[1] + 1)
        answer = [...sliceNumList]
        break;
      default:
        let tem = []
        for (let i = slicer[0]; i <= slicer[1]; i += slicer[2]) {
            tem.push(num_list[i]);
        }
        answer = [...tem]  
    }
    
    return answer;
}