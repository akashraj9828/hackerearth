#
# @Author: Akash Raj 
# @Date: 2020-01-11 12:31:58 
# @Last Modified by:   Akash Raj 
# @Last Modified time: 2020-01-11 12:31:58 
#/

def threeSumClosest(self, A, B):
    min_dif=None;
    A.sort()
    ans=None;
    for i in range(len(A)-2):
        s=i+1;
        e=len(A)-1
        while(s<e):
            t=A[i]+A[s]+A[e];
            diff=abs(B-t);
            if t==B:
                return B
            if min_dif==None or abs(diff)<abs(min_dif):
                min_dif=abs(diff);
                ans=t
            if t<B:
                s+=1
            if t>B:
                e-=1
    return ans
                


# A =[-1 ,2, 1 ,-4]
# B =1

# A =[ -5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3 ]
# B =-1

A = [ 4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8 ]
B =-3
threeSumClosest(A,B)
