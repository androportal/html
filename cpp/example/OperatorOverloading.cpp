#include <iostream>
using namespace std;

class array {
  int nums[10];
public:
  array();
  void set(int n[10]);
  void show();
  array operator++();
  friend array operator--(array &ob);
};

array::array()
{
  int i;
  
  for(i = 0; i <10; i++) 
     nums[ i ] = 0;
}  

void array::set(int *n)
{
  int i;
  
  for(i = 0; i <10; i++) 
     nums[ i ] = n[ i ];
}

void array::show()
{
  int i;

  for(i = 0; i <10; i++) 
    cout << nums[ i ] << ' ';

  cout << endl;
}

// Overload unary op using member function.
array array::operator++()
{
  int i;

  for(i = 0; i <10; i++) 
    nums[ i ]++;

  return *this;
}

// Use a friend.
array operator--(array &ob)
{
  int i;

  for(i = 0; i <10; i++) 
    ob.nums[ i ]--;

  return ob;
}
 
int main()
{
  array object1, object2, object3;

  int i[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

  object1.set(i);
  object2.set(i);
  
  cout<<"\nInitial array\n";
  object1.show();

  cout<<"\nArray with overloaded ++operator\n";
  object3 = ++object1;
  object3.show();

  cout<<"\nArray with overloaded --operator\n";
  object3 = --object2;
  object3.show();

  return 0;
}
