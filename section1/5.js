// 강의 보고..
function solution(arr){         
    let answer, min=Number.MAX_SAFE_INTEGER; // 아주 큰 숫자로 초기화
    // 왜?? 그냥.. for문 돌면서 비교하는데 제일 작은 값 찾기 위해
    // min = arr[0] 해도 됨

    for(i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    answer = min
    return answer;

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));


// 다른 풀이
// 최소값 구하는 메소드
// Math.min()
function solution(arr){         
    let answer = Math.min(...arr)
    // 스프레드 써서 배열에서 꺼내 펼쳐줌
    return answer
}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));