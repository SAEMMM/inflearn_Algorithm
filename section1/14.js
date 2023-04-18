// 못 풀었음...
function solution(s){  
    let answer=""
    let max = Number.MIN_SAFE_INTEGER

    for(i = 0; i < s.length; i++) {
        if(s[i].length > max) {
            max = s[i].length
            answer = s[i]
        }
    }
    return answer
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));


// 강의 풀이
function solution(s){  
    let answer="", max=Number.MIN_SAFE_INTEGER; // 가장 작은 숫자
    for(let x of s){
        if(x.length>max){
            max=x.length;
            answer=x;
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));