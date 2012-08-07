#include <iostream>
#include <string>
#include <list>
#include <vector>
#include <algorithm>
#include <iterator>

using namespace std;

int main( ) {

   vector<string> v1, v2, v3;

   v1.push_back("a");
   v1.push_back("c");
   v1.push_back("e");

   v2.push_back("b");
   v2.push_back("d");
   v2.push_back("f");

   v3.reserve(v1.size( ) + v2.size( ) + 1);

   merge(v1.begin( ), v1.end( ),
         v2.begin( ), v2.end( ),
         back_inserter<vector<string> >(v3));

   for(int i=0;i<6;i++){
      cout <<"\n" << v3[i];
   }

}
