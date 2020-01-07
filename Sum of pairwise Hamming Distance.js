/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:27:02 
 * @Last Modified by: Akash Raj
 * @Last Modified time: 2020-01-07 12:31:04
 */

 
// module.exports = { 
//param A : array of integers
//return an integer
//    hammingDistance : function(A){
A = [96, 96, 7, 81, 2, 13]
sum = 0;
for (i = 0; i < 32; i++) {
    count = 0;
    console.log("---: count", count);
    for (j = 0; j < A.length; j++) {
        if (A[j] & (1 << i)) {
            count++;
        }
    }
    sum += count * (A.length - count) * 2
    console.log("---: sum", sum);
}
return sum
//    }
//    };