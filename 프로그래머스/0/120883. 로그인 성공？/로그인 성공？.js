function solution(id_pw, db) {
    let answer = 'fail'
    let [id, pw] = id_pw
    
    for(const [dbId, dbPw] of db){
        if(dbId === id && dbPw === pw){
            answer = 'login'
        } else if (dbId === id && dbPw !== pw) {
            answer = 'wrong pw'
        }
    }
    
    return answer
}