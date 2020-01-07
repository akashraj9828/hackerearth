/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:36:28 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-07 12:36:28 
 */
#include<iostream>
#include <chrono>
using namespace std;
int count=0;

int fabonacci(int x,int y,int z){
    if(z==0)
    return y;
    // cout<<z+1<<"::"<<x+y<<endl;
    fabonacci(y,x+y,--z);
}
int main(){
    int x=10;
    cout<<fabonacci(0,1,x-1);
    
    return 0;
}
