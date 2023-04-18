// 오답^^..
function solution(s){  
    let answer = ''

    for(i = 0; i < s.length; i++) {
        if(i === s.indexOf(s[i])) {
            answer += s[i]
        }
    }
    return answer
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
// goodtimestudent

// 강의 풀이
function solution(s){  
    let answer;
    //console.log(s.indexOf("time"));
    answer=s.filter(function(v, i){
        // filter: 새로운 배열을 만든다
        return s.indexOf(v)===i;
    });
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));