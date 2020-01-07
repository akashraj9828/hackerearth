/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:36:15 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-07 12:36:15 
 */
// ******************** Ques..***************//
// https://www.interviewbit.com/problems/add-one-to-number/
// Given a non-negative number represented as an array of digits,

// add 1 to the number ( increment the number represented by the digits ).

// The digits are stored such that the most significant digit is at the head of the list.

// Example:

// If the vector has [1, 2, 3]

// the returned vector should be [1, 2, 4]

// Input can have leading zeros but answer cant have leading zeros
// *******************************************//


// 

A = [0,0,0,0,0,0,0,0,9, 9, 9, 9]
// A = [0, 0, 0, 2, 4, 5, 9, 9]

if(A.length==1 && A[0]==0){
    return [1];
}

var fe=A[0]
while(fe==0){
    A.shift()
    fe=A[0]
}

if (A[A.length - 1] < 9) {
    A[A.length - 1] = A[A.length - 1] + 1;
}else
if (A[A.length - 1] == 9) {
    i = 0;
    while (A[A.length - 1 - i] == 9) {
        A[A.length - 1 - i] = 0
        i++
        if(i==A.length){
            console.log('all 9');
            A.push(0);
            A[0]=1;
            console.log(A)
            return A;
        }
        
    }
    A[A.length - 1 - i] = A[A.length - 1 - i] + 1
}

console.log(A)
return A