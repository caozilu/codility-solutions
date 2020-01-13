// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var left = 0;
    var right = 0;
    var diffArray = [];
    var minDiff = 0;
    
    for(var i = 0; i < A.length; i++){
        right += A[i];
    }

    for(var j = 0; j < A.length - 1; j++){
        left += A[j];
        right -= A[j];
        diffArray.push(Math.abs(left - right));
    }

    minDiff = diffArray[0];
    for(var k = 1; k < diffArray.length; k++){
        if(diffArray[k] < minDiff){
            minDiff = diffArray[k];
        }
    }
    
    return minDiff;
}