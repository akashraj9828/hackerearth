/*
 * @Author: Akash Raj 
 * @Date: 2020-01-08 00:24:04 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-08 00:24:04 
 */
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int rec(vector<vector<int>> &grid, int m, int n, int sum)
{
    cout << m << "," << n << "," << sum << endl;
    
    if (m == 0 || n == 0)
    {
        return grid[m][n];
    }else{
        sum= grid[m][n] + min(rec(grid,m-1,n, sum),rec(grid,m,n-1, sum) );
    }

    
}

int minPathSum(vector<vector<int>> &grid)
{
    int sum = rec(grid, grid.size()-1, grid[0].size()-1, 0);
    cout << "sum  " << sum;
    return sum;
}

int main()
{
    vector<vector<int>> grid = {
        {1, 3, 1},
        {1, 5, 1},
        {4, 2, 1}};

    minPathSum(grid);

    return 0;
}