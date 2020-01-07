
 # @Author: Akash Raj 
 # @Date: 2020-01-07 12:37:55 
 # @Last Modified by: Akash Raj
 # @Last Modified time: 2020-01-07 12:38:33
 #
 # https://www.interviewbit.com/problems/power-of-two-integers/
 #
 # Given a positive integer which fits in a 32 bit signed integer, find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.
 #

# since integer are 32bits it has to be less than 2^32 hence only checking power till 32 
# anything beyond that is unnecessary

def isPower(self, A):
        for p in range(2,33):
            # print(p)
            a=round(A**(1/p))
            # print((str)(p)+"   "+(str)(a));
            if(a**p==A):
                return 1
        return 0