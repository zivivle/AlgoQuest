function solution(video_len, pos, op_start, op_end, commands) {
// 1. commands 배열을 돌면서 'prev'면 10초 전으로 이동, 
// 현재 위치가 10초 미만인 경우 0분 0초로 이동
// 2. commands 배열을 돌면서 'next'면 10초 후로 이동, 
// 동영상의 남은 시간이 10초 미만일 경우 영상의 마지막 위치 (영상의 길이와 같음)으로 이동
// 3. 현재 위치가 op_start ≤ 현재 재생 위치 ≤ op_end인 경우 자동으로 오프닝이 끝나는 위치로 이동
// @video_len 영상 길이
// @pos 기능이 수행되기 직전의 재생위치를 나타내는 문자열 
// @op_start 오프닝 시작 시각
// @op_end 오프닝이 끝나는 시각
// @commands 사용자의 입력을 나타내는 1차원 문자열 배열
// return 이때 사용자의 입력이 모두 끝난 후 동영상의 위치를 "mm:ss" 형식으로 return
    
    var answer = '';
    
    const [posM, posS] = pos.split(':').map(Number)
    const [opSM, opSS] = op_start.split(':').map(Number)
    const [opEM, opES] = op_end.split(':').map(Number)
    const [vLM, vLS] = video_len.split(':').map(Number)
    
    let posTime = (posM * 60) + posS
    const opStartTime = (opSM * 60) + opSS
    const opEndTime = (opEM * 60) + opES
    const videoLenTime = (vLM * 60) + vLS
    
    
    for (let i = 0; i < commands.length; i++) {
        // 오프닝 구간에 있는지 먼저 확인하고, 오프닝 구간에 있으면 opEndTime으로 이동
        if (posTime >= opStartTime && posTime <= opEndTime) {
            posTime = opEndTime;
        }
        
        if (commands[i] === 'prev') {
            // 10초 전으로 이동, 현재 위치가 10초 미만이면 0초로 이동
            posTime = Math.max(0, posTime - 10);
        } else if (commands[i] === 'next') {
            // 10초 후로 이동, 남은 시간이 10초 미만이면 동영상 끝으로 이동
            posTime = Math.min(videoLenTime, posTime + 10);
        }
        
        // 명령어를 실행한 후에도 다시 오프닝 구간에 있는지 확인
        if (posTime >= opStartTime && posTime <= opEndTime) {
            posTime = opEndTime;
        }
    }
    
    const posMinute = String(Math.floor(posTime / 60)).padStart(2, '0')
    const posSecond = String(Math.floor(posTime % 60)).padStart(2, '0')
    
    answer = posMinute + ':' + posSecond
    
    return answer;
}