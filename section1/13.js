function solution(s){  
    let answer="";
    let upper = s.toUpperCase()
    let lower = s.toLowerCase()
    for(i = 0;i < s.length; i++) {
        if(s[i] !== upper[i]) {
            answer += s[i].toUpperCase()
        } else if(s[i] !== lower[i]) {
            answer += s[i].toLowerCase()
        }
    }
    return answer
}

console.log(solution("StuDY"));

// 강의 풀이
function solution(s){  
    let answer="";
    for(let x of s){
        if(x===x.toUpperCase()) answer+=x.toLowerCase();
        else answer+=x.toUpperCase();
    }
    return answer;
}

console.log(solution("StuDY"));