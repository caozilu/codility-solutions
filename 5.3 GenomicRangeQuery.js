// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var impact = [];
    
    for(let i = 0; i < P.length; i++){
        let string = S.slice(P[i], Q[i]+1);
        if(P[i] === Q[i]){
            string = S.charAt(P[i]);
        }

        let min = 0;
        if(string.includes('T')){
            min = 4;
        }
        if(string.includes('G')){
            min = 3;
        }
        if(string.includes('C')){
            min = 2;
        }
        if(string.includes('A')){
            min = 1;
        }
        impact.push(min);
    }
    
    return impact;
}