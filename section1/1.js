// 내 풀이
function solution(a, b, c){
    let answer;
    if(a > b) {
        answer = b
    } else if(b > c) {
        answer = c
    }
    return answer;
}

console.log(solution(6, 5, 11));


// 강의 풀이
function solution(a, b, c){
    let answer;
    if(a<b) answer=a;
    else answer=b;
    if(c<answer) answer=c; 
    return answer;
}

console.log(solution(2, 5, 1));