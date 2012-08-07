#include <iostream>
using namespace std;

class BaseClass1 {
public:
  BaseClass1() { 
     cout << "Constructing BaseClass1\n"; 
  }
  ~BaseClass1() { 
     cout << "Destructing BaseClass1\n"; 
  }
};

class BaseClass2 {
public:
  BaseClass2() { 
     cout << "Constructing BaseClass2\n"; 
  }
  ~BaseClass2() { 
     cout << "Destructing BaseClass2\n"; 
  }
};

class DerivedClass : public BaseClass1, public BaseClass2 {
public:
  DerivedClass() { 
     cout << "Constructing DerivedClass\n"; 
  }
  ~DerivedClass() { 
     cout << "Destructing DerivedClass\n"; 
  }
};

int main()
{
  cout<<"\nConstructing and Destructing sequence \nin multiple inheritance\n\n";
  DerivedClass object;

  return 0;
}
