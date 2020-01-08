/*
 * @Author: Akash Raj 
 * @Date: 2020-01-08 11:57:20 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-08 11:57:20 
 */
function searchRange(A, B){
        
    a=A;
    b=B;
    s=0,m=parseInt(a.length/2),e=a.length
    
    if(a.length==1 && a[0]==b){
        return[0,0]
    }
    if(a.length==1 && a[0]!=b){
        return[-1,-1]
    }
    while(s<e){
        console.log("---: searchRange -> s m e", s+" "+" "+ m+" "+e);
        if(a[m]==b){
            console.log("found at ",m);
            break;
        }
        if(b>a[m]){
            s=m;
            m=parseInt((s+e)/2)
        }
        if(b<a[m]){
            e=m;
            m=parseInt((s+e)/2)
        }
    }
    if(m==s){
        console.log("not found");
    }
    t=m;
    while(a[t]==b){
        t++;
    }
    end=t-1;
    console.log("---: searchRange -> end", end);
    t=m
    while(a[t]==b){
        t--;
    }
    start=t+1;
    console.log("---: searchRange -> start", start);

    
}


// A = [5, 7, 7,7,7,7,7,7,7,7,7,7 ,8, 8,8,8,8,8, 10]
// B = 8

// A=[ 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10 ]
// B=4

A=[1]
B=1
for(i=0;i<A.length;i++){
console.log(":", i,":",A[i]);
}
searchRange(A,B)