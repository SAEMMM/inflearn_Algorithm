function solution(arr){
    let answer = []
    let princess = 0
    // for문 돌리면서 100이 될 때까지만 더하기..?
    for(i = 0; i< arr.length; i++) {
        princess += arr[i]
        if(princess === 100) {
            answer.push(arr[i])
        }
    } return answer
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 강의 풀이
function solution(arr){
    let answer=arr; // 얕은복사(arr과 answer, answer와 arr 다 바뀜)
    let sum=answer.reduce((a, b)=>a+b, 0); // 배열의 총 합
    // reduce(,0) 0은 초기값. 0에 값들을 더해준다. 1이면 1에 더해줌...
    for(let i=0; i<8; i++){ // 전체 길이에서 하나 뽑음
        for(let j=i+1; j<9; j++){ // i를 제외하고 하나 뽑음
            if((sum-(answer[i]+answer[j]))===100){
                answer.splice(j, 1); // j번째 인덱스 1개 제거
                // j인덱스가 더 뒷순서기 때문에 i를 먼저 지우면 j가 땡겨짐!!..
                // 이상한 숫자가 지워지기 때문
                answer.splice(i, 1); // i번째 인덱스 1개 제거
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));