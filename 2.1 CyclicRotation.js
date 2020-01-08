// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var rotatedArray = [];
    
    for(var i = 0; i < A.length; i ++){
        rotatedArray[(i + K) % A.length] = A[i];
    }
    
    return rotatedArray;
}