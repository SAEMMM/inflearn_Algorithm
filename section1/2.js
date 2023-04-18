// 못 풀었음...
function solution(a, b, c){
    let answer="YES", max;
    let sum = a + b + c; // 세 수의 합
    // 가장 긴 길이 < 두번째, 세번째 길이의 합
    // 위 조건이면 'YES', 아니면 'NO'
    // a, b, c를 비교해서 큰 숫자순으로 내림차순
    // 아니면 if문?
    if(a > b) {
        max = a
    } else {
        max = b
    }
    if(c > max) { // max로 설정해주면 되는 것을.. 생각 못 함
        max = c
    }
    if((sum - max) <= max) { // 세 길이의 합에서 제일 긴 길이 뺀 값이
        // 제일 긴 길이보다 작거나 같을 때
        answer = 'NO' // 삼각형을 만들 수 없음
    }
    return answer
}

console.log(solution(13, 33, 17));