// 내 풀이 (...최소값부터 막힘)
function solution(arr){
    let answer=[];
    let sum = 0
    let min = arr[0]
    for(i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            sum += arr[i]
            if()
        }
    }   
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));


// 강의 풀이
function solution(arr){
    let answer = [];
    let sum = 0, min = 1000; // min을 큰 값으로 초기화 하는 연습
    for(let x of arr){ // 변수 이름 간단하게 쓰기
        if(x % 2 === 1){
            sum += x;
            if(x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);     
    // 답 2개 나와야 해서.. push 2번 함
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));