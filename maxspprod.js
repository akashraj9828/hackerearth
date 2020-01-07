/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:36:47 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-07 12:36:47 
 */
// ******************************************************//
// https://www.interviewbit.com/problems/maxspprod/
// Naive solution runs out of time on long input
// for O(n) use stack
// ******************************************************//
A = [5, 9, 6, 8, 6, 4, 6, 9, 5, 4, 9]
// console.log(A)
// return 80;
max = -999999
for (i in A) {

    // console.log();
    // console.log();

    // console.log("A["+i+"]=" +A[i])
    prod = 0;
    sl = 0;
    sr = 0;
    for (j = i; j > 0; j--) {

        if (A[j] > A[i]) {

            sl = j;
            console.log("sl: " + A[sl]);
            break;
        }

    }
    for (j = i; j < A.length; j++) {

        if (A[j] > A[i]) {

            sr = j;
            // console.log("sr: "+A[sr]);
            break;
        }
    }
    prod = sl * sr;
    max = Math.max(max, prod)
    // console.log("prod:  "+prod);

}
// console.log("max "+max);