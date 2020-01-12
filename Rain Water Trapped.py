#
# @Author: Akash Raj 
# @Date: 2020-01-12 13:22:29 
# @Last Modified by:   Akash Raj 
# @Last Modified time: 2020-01-12 13:22:29 
#/
def trap( A):
    lh=[0]*len(A)
    rh=[0]*len(A)
    j=len(A)-1
    ml=0
    mr=0
    for i in range(len(A)):
        j=len(A)-1-i
        ml=max(ml,A[i])
        lh[i]=ml
        mr=max(mr,A[j])
        rh[j]=mr
    print([i for i in range(len(A))])
    print(A)
    print(lh)
    print(rh)
    count=0
    for i in range(len(A)):
        t=min(lh[i],rh[i])-A[i]
        if(t>0):
            print(i,t)
            count+=t

    print("max water:",count)
    return count

A =[ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

trap(A)