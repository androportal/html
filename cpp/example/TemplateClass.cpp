#include<iostream>
using namespace std;

template <class T>
class Stack 
{
	private:
   	int top;
   	T st[100];
   	
	public:
	
   	Stack() { top = -1; }
   	
   	void push(T i)
      	{ 
      		st[++top] = i;
       		cout<<"\nValue pushed at top is "<<st[top];
      	}
      	
   	T pop()
      	{ 
      		cout<<"\nValue popped up from top is "<<st[top];
      		return st[top--]; 
      	}
};
  
int main()
{
	Stack<int> ii;
	Stack<string> ss;
	
	ii.push(25);
	ss.push("Hello");
	
	ii.pop();
        ss.pop();
}

