import random
def findMinXor( A):
    A.sort()
    print(A)
    min_xor=999999999999
    m=[[0]*len(A)]*len(A)
    # for i in range(len(m)):
    #     for j in range(len(m[0])):
    #         print(m[i][j],end = ' ')
    #     print()

    for i in range(len(A)):
        for j in range(len(A)):
            # print(A[i],A[j],A[i]^A[j])
            # m[i][j]=A[i]^A[j]
            min_xor=min(min_xor,A[i]^A[j])
            print(A[i]^A[j],end = '\t')
        print()
    # for i in range(4):
    #     for j in range(i+1,4):
    #         min_xor=min(min_xor,A[i]^A[j])
    #         print(A[i]^A[j],end = '\t')
    #     print()
            
    print(min_xor,'--------')
    return min_xor

A =[ 12, 4, 6, 2 ]

A=[ 3, 2, 13, 1, 5, 13, 0, 13, 13 ]

# A=[int(random.random()*1000) for i in range(15)]

findMinXor(A)