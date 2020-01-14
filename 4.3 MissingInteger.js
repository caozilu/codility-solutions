// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var integers = new Set(A);
    
    for(var i = 1; i < integers.size + 2; i++){
        if(!integers.has(i)){
            return i;
        }
    }
    return 1;
}