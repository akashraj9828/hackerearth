/*
 * @Author: Akash Raj 
 * @Date: 2020-01-07 12:36:22 
 * @Last Modified by:   Akash Raj 
 * @Last Modified time: 2020-01-07 12:36:22 
 */
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;
vector<string> sub;
vector<string> final_sub;
int convertc=0;
int repeatc=0;
void convert(string s, int i);
void repeat(string s, int i)
{   repeatc++;
    string temp=s;
    
    temp.erase(remove(temp.begin(), temp.end(), temp[i]), temp.end());

    vector<string>::iterator it = find(sub.begin(), sub.end(), temp);
    if (it == sub.end())
    {
        sub.push_back(temp);
    }

    // cout<<s<<" :: "<<temp<<endl;
    if (i >= s.length())
        return;

    repeat(s, i+1);
}

int main()
{
    string s="ab";
    // cin>>s;
    // sub.push_back(s);
    // cout<<s.substr(1,1)<<endl;
    for (int i = 0; i <s.length(); ++i)
    {
        for (int j = s.length()-i; j >=1 ; --j)
        {   
            string temp = s.substr(i, j);
            // cout<<"i="<<i<<" j="<<j<<"   "<<temp<<endl;
            // cout<<temp<<endl;
            vector<string>::iterator it = find(sub.begin(), sub.end(), temp);
            if (it == sub.end())
            {
                sub.push_back(temp);
                    repeat(temp, 0);

                // cout << temp << endl;
            }
        }
    }
    cout << sub.size() << endl;
    final_sub.push_back("");
    for (int i = 0; i < sub.size(); i++)
    {
        cout << i + 1 << ":: " << sub[i] << "  " ;
        convert(sub[i],0);
    }
   
    cout<<endl<<final_sub.size()<<endl;
    for (int i = 0; i < final_sub.size(); i++)
    {
        cout << final_sub[i] <<" ";
        // convert(final_sub[i], 0);
    }

    cout<<endl<<"repeat called::"<<repeatc<<endl;
    cout<<"convert called::"<<convertc<<endl;

    return 0;
}



void convert(string s,int i){
    

    
    convertc++;
    string temp=s;
    int save=i;
    if (int(temp[i])!=0)
        temp.replace(i, 1, to_string(int(temp[i])));
    // cout<<int(temp[i])<<endl;
    vector<string>::iterator it = find(final_sub.begin(), final_sub.end(), temp);
    if (it == final_sub.end())
    {
        final_sub.push_back(temp);
        
        // cout << temp << endl;
    }
    if (i+1 > s.length())
        return;
    convert(s, i + 1);
    int len = to_string(int(temp[i])).length();
    convert(temp, i + len);
    // cout<<temp<<endl;
   
}

// void repeat2(string s,int i)