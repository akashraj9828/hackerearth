#
# @Author: Akash Raj 
# @Date: 2020-01-11 12:50:16 
# @Last Modified by:   Akash Raj 
# @Last Modified time: 2020-01-11 12:50:16 
#/
    # @param A : list of integers
    # @return a list of list of integers
def threeSum(A):
    
    A.sort()
    B=0
    ans=[];
    for i in range(len(A)-2):
        s=i+1;
        e=len(A)-1
        while(s<e):
            t=A[i]+A[s]+A[e];
            diff=abs(B-t);
            if t==B:
                if([A[i],A[s],A[e]] not in ans):
                    ans.append([A[i],A[s],A[e]])
                s+=1
                e-=1
                
            if t<B:
                s+=1
            if t>B:
                e-=1
    print  (ans)
    return ans


A =[ 1, -4, 0, 0, 5, -5, 1, 0, -2, 4, -4, 1, -1, -4, 3, 4, -1, -1, -3 ]
threeSum(A)