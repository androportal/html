#include <iostream>
#define VIEW '$'
using namespace std;
int main(void)
{
int i, j;
cout<<"Money pyramid!\n"<<endl;
for(i=1; i<=15; i++)
{for(j=1; j<=15-i; j++)
cout<<" ";
for(j=1; j<=2*i-1; j++)
cout<<VIEW;
cout<<"\n";}
return 0;
}
