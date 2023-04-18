function solution(s){         
    let answer=0;

    for(i = 0; i < s.length; i++) {
        if(s[i] === toUpperCase()) {
            answer++
        }
    }
    return answer
}

let str="KoreaTimeGood";
console.log(solution(str));

// 강의 풀이
function solution(s){         
    let answer=0;
    for(let x of s){
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        // 아스키넘버의 대문자 범위 65~90 알아둘 것
        // 아스키넘버의 소문자 범위 97~122 알아둘 것
        if(x===x.toUpperCase()) answer++; 
        // x와 x 전체를 대문자로 바꿨을 때의 비교
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));