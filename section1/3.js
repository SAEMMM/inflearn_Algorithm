// 내 풀이
function solution(n){
    let answer = Math.ceil(n / 12)
    // 연필 1다스 = 12자루
    // 1인당 1자루씩 나누어 줄 때, 필요한 '다스'
    // 25명에게 나누어주려면 3다스
    // 25 / 12 = 2.08, Math.ceil(n / 12)
    return answer;
}

console.log(solution(25));


// 강의 풀이
function solution(n){
    let answer;
    answer=Math.ceil(n/12);
    return answer;
}

console.log(solution(178));