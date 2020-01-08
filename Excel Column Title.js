/*
 * @Author: Akash Raj 
 * @Date: 2020-01-08 11:26:57 
 * @Last Modified by: Akash Raj
 * @Last Modified time: 2020-01-08 22:13:35
 */
convertToTitle=function(A){

    var result = '',
        curr;
        
        while(A > 0){
            curr = (A - 1)%26;
            result = String.fromCharCode(65 + curr) + result;
            
            A = Math.floor((A - 1)/26);
        }
        
        return result;
}