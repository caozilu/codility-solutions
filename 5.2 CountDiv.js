// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A%K === 0){
        return Math.floor(B/K) - Math.floor(A/K) + 1;
    } else{
        return Math.floor(B/K) - Math.floor(A/K);
    }
}