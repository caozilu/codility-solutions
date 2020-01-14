// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var permutation = new Set(A);
    
    for(var i = 0; i < A.length; i++){
        if(!permutation.has(i+1)){
            return 0;
        }
    }
    return 1;
}