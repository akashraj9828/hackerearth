// ******************** Ques..***************//
// Given a matrix, A of size M x N of 0s and 1s. If an element is 0, set its entire row and column to 0.
// https://www.interviewbit.com/problems/set-matrix-zeros/
// *******************************************//



// void Solution::setZeroes(vector<vector<int> > &A) {

#include <iostream>
#include <vector>
using namespace std;

int main()
{   
    vector< vector<int> > A{ { 1, 0,1 }, 
                               { 1,1,0 }, 
                               { 1,1,1 } }; 
    int m = A.size();
    int n = A[0].size();
    vector<int> c;
    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (A[i][j]== 0)
                {

                    //col
                    for (int c = 0; c < n; c++)
                    {
                        if (A[i][c] != 0)
                        {
                            A[i][c] = 9;
                        }
                    }
                    //row
                    for (int r = 0; r < m; r++)
                    {
                        if (A[r][j] != 0)
                        {
                            A[r][j] = 9;
                        }
                    }
                }
        }
    }

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if(A[i][j]==0 || A[i][j]==9){
                A[i][j]=0;
            }
           cout<<A[i][j]<<'\t';
        }
        cout<<endl;
    }

    return 0;
}



// }
