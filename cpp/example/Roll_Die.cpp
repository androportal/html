#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;
int RollDie();
int main()
{srandom(time(NULL));
   int  outcome = RollDie();
   cout << "\n"<<outcome << endl;
   outcome = RollDie();
  cout <<outcome << endl;
return 0;
}
int RollDie() 
{  int randomNumber, die;
  randomNumber = random();
   die = 1 + randomNumber % 6;
   return die;}
