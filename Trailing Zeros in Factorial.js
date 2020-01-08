/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:49:05 
 * @Last Modified by: Akash Raj
 * @Last Modified time: 2020-01-07 21:59:16
 */


var A = 5
var n = A
var z = 0, f = 0, t = 0;
var c=0;
for (i = 1; i <= n; i++) {
    temp = i;

    if (temp % 10 == 0) {
        while (temp % 10==0) {
            z+=1
            temp = temp / 10
        }  
    }
    if (temp % 5 == 0) {
        while (temp % 5==0) {
            f++
            temp = temp / 5
        }        
    }
    if (temp % 2 == 0) {
        while (temp % 2==0) {
            t++
            temp = temp / 2
        }        
    }

}

console.log(z,Math.min(f,t));
