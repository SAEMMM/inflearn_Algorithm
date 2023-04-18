// 틀림
function solution(arr){         
    let answer = 1
    // 내 바로 앞이 나보다 작아도, 앞앞이 나보다 크면 나는 안보임
    let max = Math.max(...arr)
    console.log('제일 큰 애 =', max)
    
    let maxIndex = arr.indexOf(max)
    console.log('제일 큰 애 인덱스 =', maxIndex)

    for(i = 0; i < arr.length; i++) {
        if(arr[maxIndex] - arr[i] >= 0) {
            answer++
        }
    }
    return answer
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

// 강의 풀이
function solution(arr){         
    let answer=1, max=arr[0]; // 맨 앞 값을 변수 max로 초기화
    for(let i=1; i<arr.length; i++){
        if(arr[i]>max){ // i가 max보다 크면 보인다
            answer++; // 보이니까 count
            max=arr[i]; // for문 돌려가면서 max를 재설정.... 
        }
    }
    return answer;
}

let arr=[130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));