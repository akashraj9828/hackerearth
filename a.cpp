#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;
vector<string> sub;
void convert(string s, int i);
void repeat(string s, int i)
{   
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
    string s = "ab";
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

    for (int i = 0; i < sub.size(); i++)
    {
        // cout << i + 1 << ":: " << sub[i] << endl;
        convert(sub[i],0);
    }
    

    return 0;
}


void convert(string s,int i){
    string temp=s;
    if (int(temp[i])!=0)
        temp.replace(i, 1, to_string(int(temp[i])));
    // cout<<int(temp[i])<<endl;
    cout<<temp<<endl;
    if(i>=s.length())
    return;
    convert(s,i+1);
    // cout << std::to_string(96);
    // temp.replace(temp[i],int(temp[i]));
    // sub.push_back(temp);
}