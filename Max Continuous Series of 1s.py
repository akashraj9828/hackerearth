# class Solution:
# @param A : list of integers
# @param B : integer
# @return a list of integers
def maxone( A, B):
    first_z_i=-1;
    l=0
    start=0
    count=0
    i=0

    while(i<len(A)):

        start=first_z_i+1
        print('start ',start)
        l=0
        i=start
        count=0
        while(count<B):
            print('aaaaaa')
            if(A[i]==0):
                if(count==0):
                    first_z_i=i;
                count+=1
            i+=1
            if(i>len(A)-1):
                break
            l+=1
        print(l);
        
A= [ 0, 1, 1, 1 ];
B=0;

maxone(A,B)
            
