// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counters = [];
    var maxCounter = 0;
    var addToMax = 0;
    
    for(var i = 0; i < N; i++){
        counters[i] = 0;
    }

    for(var j = 0; j < A.length; j++){
        if(A[j] == N + 1){
            addToMax = maxCounter;
        }else {
            //decide to increase counter by 1 from current value or from current maxiumum
            counters[A[j] - 1] = (counters[A[j] - 1] < addToMax) ? addToMax : counters[A[j] - 1];
            counters[A[j] - 1]++;

            if(counters[A[j] - 1] > maxCounter){
                maxCounter = counters[A[j] - 1];
            }
        }  
    }

    //deal with all counters increased before addToMax is triggered
    for (var k = 0; k < N; k++) {
        if(counters[k] < addToMax){
            counters[k] = addToMax;
        }
        
    }
    
    return counters;
}