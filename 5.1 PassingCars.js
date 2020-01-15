// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var toEast = 0;
    var passing = 0;
    
    for(var i = 0; i < A.length; i++){
        if(A[i] == 0){
            toEast++;
        } else {
            passing += toEast;
        }
    }
    
    if(passing > 1000000000){
        passing = -1;
    }
    
    return passing;
}