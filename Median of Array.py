#
# @Author: Akash Raj 
# @Date: 2020-01-08 11:49:51 
# @Last Modified by:   Akash Raj 
# @Last Modified time: 2020-01-08 11:49:51 
#


# joining method naive solution
# actually was needed to be done using binary search

# logic
# a=[n..elems]
# b=[m..elems]
# divide a and b such that total elems in right partition= total elems i left partition
# a=[a1,a2,a3,..,a left] [a right,..,an-1,an]
# b=[b1,b2,b3,..,b left] [b right,..,bn-1,bn]
# 
# up or down the point of partition until you get a left<b right and b left<a right
# once point of partition is found which satisfies ^
# median= max(a left,b left) //if total elems=odd
# median= avg(max(a left,b left),min(a right,b right) //if total elems=even
# 

def findMedianSortedArrays(A, B):
    a=A
    b=B

    if(len(a)==0 and len(b)==1):
        return b[0]
    if(len(b)==0 and len(a)==1):
        return a[0]
    size=len(a)+len(b);
    mid=(int)(size/2)
    ai=0;
    bi=0;
    prev=None
    curr=None
    r=None
    if(size%2==0):
        r=mid+1
    else:
        r=mid+1
    print(size,r)
   
    for i in range(r):
        # print(i)
        # print(ai,bi)
        # print(a[ai],b[bi])
        prev=curr
        if(ai==len(a)):
            curr=b[bi]
            bi+=1
        elif(bi==len(b)):
            curr=a[ai]
            ai+=1
        elif(a[ai]<b[bi]):
            curr=a[ai]
            ai+=1;
        elif(b[bi]<a[ai]):
            curr=b[bi]
            bi+=1
        elif(b[bi]==a[ai]):
            curr=b[bi]
            bi+=1
        print(curr)
        
    print("-------")
    if(size%2==0):
       print((float)(prev+curr)/2)
    else:
       print(curr)


# A =[1,4 ,5]
# B =[2 ,3]

# A =[ -50, -41, -40, -19, 5, 21, 28 ]
# B =[ -50, -21, -10 ]
# A=[]
# B=[0,23]

A =[ -37, -9, 10, 19 ]
B =[ -29, 18, 46 ]
findMedianSortedArrays(A,B)