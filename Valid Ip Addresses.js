/*
 * @Author: Akash Raj 
 * @Date: 2020-01-08 19:44:33 
 * @Last Modified by: Akash Raj
 * @Last Modified time: 2020-01-08 20:48:05
 */

// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// A valid IP address must be in the form of A.B.C.D, where A,B,C and D are numbers from 0-255. The numbers cannot be 0 prefixed unless they are 0.


// recursive function to create all possible combination of A.B.C.D
function rec(ip, n) {
    //ip=string,n=no. of '.' already put 0 indexed
    // code to verify the correctness of ip
    if (n == 3) {
        x = ip.split('.');

        for (i = 0; i < 4; i++) {
            t = parseInt(x[i]);
            if (t == 0 && x[i].length > 1) {
                return
            }
            if (t > 0 && x[i][0]==0) {
                return
            }
            if (t > 255 || x[i].length == 0) {
                return
            }
            
        }
        console.log("---: rec -> ip", ip);
        return
    }

    //put '.' after 1,2,3 digits after last '.' recursively
    for (i = 1; i <= 3; i++) {
        rec(ip.slice(0, ip.lastIndexOf('.') + 1 + i) + "." + ip.slice(ip.lastIndexOf('.') + 1 + i), n + 1)
    }

}

function validate(ip) {

}
restoreIpAddresses = function (A) {
    ip = A

    rec(ip, 0)
}


ip = "25525511135";
ip = "0100100";
restoreIpAddresses(ip)