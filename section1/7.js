// function solution(day, arr){
//     let answer=0;

//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] % 10 === day) {
//             answer ++
//         }
//     }
//     return answer
// }

// arr=[25, 23, 11, 47, 53, 17, 33];
// console.log(solution(3, arr));

// // 강의 풀이
// function solution(day, arr){
//     let answer=0;
//     for(let x of arr){
//         if(x%10==day) answer++;
//     }
    
//     return answer;
// }

// arr=[25, 23, 11, 47, 53, 17, 33];
// console.log(solution(3, arr));

// function solution(n) {
//     let sqrt = Math.sqrt(n)

//     if(n / sqrt === sqrt && sqrt > 0) {
//         return Math.pow(sqrt + 1, 2)
//     } else {
//         return -1
//     }
// }

// function solution(n) {
//     return Math.sqrt(n) % 1 === 0 ? Math.pow(Math.sqrt(n)+1,2) : -1
// }
// console.log(solution(121))
// console.log(solution(3))

// function solution(arr) {
//     let answer = []
//     let num = arr.sort((a, b) => a - b)
//     // console.log('num=', num)

//     if(num.length === 1) {
//         return [-1]
//     }

//     for(i = 1; i < num.length; i++) {
//         answer.push(num[i])
//     }
//     return answer.sort((a, b) => b - a)
// }

// function solution(arr) {
//     let answer = []
//     let min = Math.min(...arr)

//     if(arr.length === 1) {
//         return [-1]
//     }
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] !== min) {
//             answer.push(arr[i])
//         }
//     }
//     return answer
// }

// console.log(solution([4, 3, 2, 1]))
// console.log(solution([10]))


// function solution(num) {
//     let answer = 0

//     while(num !== 1) {
//         if(num % 2 === 0) {
//             num /= 2
//         } else {
//             num = num * 3 + 1
//         }
//         answer++
//     }
//     if(answer >= 500) {
//         return -1
//     } else {
//         return answer
//     }
// }

// console.log(solution(6))
// console.log(solution(16))
// console.log(solution(626331))


// function solution(x) {
//     let str = String(x)
//     let num = Array.from(str)
//     let arr = num.map(Number)
//     console.log('arr=', arr)

//     let answer = 0

//     for(i = 0; i < arr.length; i++) {
//         answer += arr[i]
//         console.log('answer=', answer)
//     }
//     if(x % answer === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// function solution(x) {
//     let str = String(x)
//     let num = Array.from(str)
//     let arr = num.map(Number)
//     // console.log('arr=', arr)

//     let answer = 0
//     let num2 = 0

//     for(i = 0; i < arr.length; i++) {
//         answer += arr[i]
//         if(x % answer === 0) {
//             num2 = true
//         } else {
//             num2 = false
//         }
//     }
//     return num2
// }
// console.log(solution(10))
// console.log(solution(12))
// console.log(solution(11))
// console.log(solution(13))


// function solution(n) {
//     let answer = 0
//     let jin3 = n.toString(3)
//     // console.log('3진법=', jin3)
//     let arr = Array.from(jin3)
//     // console.log('배열=', arr)

//     for(i = arr.length - 1; i >= 0; i--) {
//         answer += arr[i]
//         // console.log('answer=', answer)
//     }
//     let num = parseInt(answer, 3)
//     // console.log('num=', num)
//     return num
// }
// console.log(solution(45))
// console.log(solution(125))


function solution(sizes) {
    let w = []
    let h = []

    for(i = 0; i < sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]) {
            w.push(sizes[i][0])
            h.push(sizes[i][1])
        } else {
            w.push(sizes[i][1])
            h.push(sizes[i][0])
        }
    }
    return Math.max(...w) * Math.max(...h)
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
// console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
// console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))