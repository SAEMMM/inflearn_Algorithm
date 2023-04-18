// 내 풀이
function solution(n){
    let answer=0;
    for(i = 1; i <= n; i++) {
        answer += i
    }
    return answer;
}

console.log(solution(6));


// 강의 풀이
function solution(n){
    let answer=0;
    for(let i=1; i<=n; i++){
        answer=answer+i;
    }
    
    return answer;
}

console.log(solution(10));