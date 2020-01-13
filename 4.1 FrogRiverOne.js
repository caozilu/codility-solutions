// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var necessaryLeaves = new Set();
    
    for(var i = 0; i < A.length; i++){
        necessaryLeaves.add(A[i]);
        if(necessaryLeaves.size == X){
            return i;
        }
    }
    
    return -1;
}