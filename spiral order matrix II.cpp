/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:36:53 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-07 12:36:53 
 */
// vector<vector<int> > Solution::generateMatrix(int A) {
#include <iostream>

using namespace std;
int main()
{
    int A = 4;
    int a = A;
    int mat[a][a];
    int count = 1;
    int rs = 0, cs = 0, re = a - 1, ce = a - 1;
    int itr=0;
    while (count <= a * a)
    {   cout<<"iteration"<<itr;
        itr++;

        cout<<"\trs: " <<rs <<"\tcs: " <<cs <<"\tre: "<< re <<"\tce: "<< ce <<endl;
        int i = rs, j = cs;


        //right
        for (j=cs; j <= ce; j++)
        {
            cout << i << "," << j << "="<<count<<endl;
            
            mat[i][j]=count++;
        }
        j=ce;
        rs++;

        cout <<"*********"<< i << "," << j << "="<<count<<endl;

        //down
        for (i=rs; i <= re; i++)
        {
            cout << i << "," << j << "="<<count<<endl;
           
            mat[i][j]=count++;
        }
        i=re;
         ce--;
         
        //left
        for (j = ce; j >= cs; j--)
        {
            cout << i << "," << j << "="<<count<<endl;
            
            mat[i][j]=count++;
        }
        j=cs;
        re--;
        //up
        for (i = re; i >= rs; i--)
        {
            cout << i << "," << j << "="<<count<<endl;
            
            mat[i][j]=count++;
        }
        i=rs;
        cs++;
    }

    for(int i=0;i<a;i++){
        for(int j=0;j<a;j++){
            cout<<mat[i][j]<<"\t";
        }
        cout<<endl;
    }
}
// }

