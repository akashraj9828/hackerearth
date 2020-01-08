/*
 * @Author: Akash Raj 
 * @Date: 2020-01-08 20:51:21 
 * @Last Modified by: Akash Raj
 * @Last Modified time: 2020-01-08 22:13:05
 */


function countAndSay(A){
    
    n=A;
    prev='1';
    seq='1';
    while(n>1){
        console.log("---: countAndSay -> n", A-n+1);
        prev=seq;
        seq=''
        for(i=0;i<prev.length;){
            count=0;
            temp=prev[i]
            // console.log("---: countAndSay -> temp", temp);
            // e=prev[i]

            while(prev[i]==temp){
                count++;
                i++;
            }
            seq+=count+''+temp
        }
        console.log("---: countAndSay -> seq", seq);
        
        n--;
    }
}

countAndSay(5)