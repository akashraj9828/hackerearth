/*
 * @Author: Akash Raj 
 * @Date: 2020-01-08 22:30:50 
 * @Last Modified by: Akash Raj
 * @Last Modified time: 2020-01-09 00:05:21
 */

 module.exports = { 
 //param A : array of strings
 //return an integer
    solve : function(A){
        var mod = 1000000007;
        var len = A.length;
        var v = Array(len);
        for (var k = 0; k < len; k++) {
            n = A[k].length;
            if (n <= 1) {
                v[k] = 1;
            } else {
                var i = 1;
                var j = 1;
                var ch = 0;
                var s = A[k];
                while (true) {
                    ch = (i * (i + 1)) / 2;
                    if(ch % n == 0){
                        v[k] = i;
                        break;
                    }
                    i++;
                }
            }
        }
        var gcd = function(a, b) {
            if (!b) {
                return a;
            }
            return gcd(b, a % b);
        }
        var ans = 1;
        for (var i = 0; i < len; i++) {
            for (var j = i + 1; j < len && v[i] != 1; j++) {
                v[j] = v[j] / gcd(v[j], v[i]);
            }
            ans = (ans % mod * (v[i]) % mod) % mod;
        }
        return ans % mod;
    }
};