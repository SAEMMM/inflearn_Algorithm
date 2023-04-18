function solution(s){  
    let answer = ''

    for(i = 0; i < s.length; i++) {
        if(s.length % 2 === 0) {
            answer = (s[Math.floor(i / 2)] + s[Math.floor(i / 2) + 1])
        } else {
            answer = (s[Math.floor(i / 2)])
        }
    }
    return answer
}

console.log(solution("study"));

// 강의 풀이
function solution(s){  
    let answer;
    let mid=Math.floor(s.length/2)
    if(s.length%2===1) answer=s.substring(mid, mid+1);
    // substring(3, 4) : 3번을 포함한 인덱스부터 4번 인덱스의 전까지(3)
    else answer=s.substring(mid-1, mid+1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    // substr(2, 4) : 2번을 포함한 인덱스부터 4개를 뽑아라
    //else answer=s.substr(mid-1, 2);
    return answer;
}
console.log(solution("study"));