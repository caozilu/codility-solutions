// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var longestGap = 0;
    var currentGap = 0;
    
    var binaryString = N.toString(2);
    
    for(var i = 0; i < binaryString.length; i++){
        if (binaryString[i] == 0){
            currentGap ++;
        } else if(binaryString[i] == 1){
            if(currentGap > longestGap){
                longestGap = currentGap;
            }
            currentGap = 0;
        }
    }
    
    return longestGap;
  
}