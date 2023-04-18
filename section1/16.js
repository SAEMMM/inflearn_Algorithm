function solution(s){  
    let arr = Array.from(s)
    let answer = [...new Set(arr)]
    answer = answer.join().replace(/,/g, '')
    return answer;
}
console.log(solution("ksekkset"));

// 강의 풀이
function solution(s){  
    let answer="";
    // s.indexOf("k")
    // 'k'라는 문자 중, 제일 앞 인덱스만 찾아줌
    // s.indexOf('k', 1)
    // 'k'라는 문자 중, 1번째 인덱스부터 하나 찾아줌
    for(let i=0; i<s.length; i++){
        //console.log(s[i], i, s.indexOf(s[i]));
        if(s.indexOf(s[i])===i) answer+=s[i];
    }
    return answer;
}
console.log(solution("ksekkset"));