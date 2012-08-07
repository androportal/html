#include <iostream>
#include <cassert>
#include <list>
#include <string>
#include <set>
using namespace std;

int main()
{
  string s("There is no distinctly native Indian criminal class");
  string s2("Indian criminal class");

  list<char> list1(s.begin(), s.end());
  list<char> list2(s2.begin(), s2.end());

  list<char> found, not_found;
  list<char>::iterator k;

  multiset<char> multiset1;
  copy(list1.begin(), list1.end(),inserter(multiset1, multiset1.end()));

  for (k = list2.begin(); k != list2.end(); ++k)
    if (multiset1.find(*k) != multiset1.end())
      found.push_back(*k);
    else
      not_found.push_back(*k);

  for (k = found.begin(); k != found.end(); ++k)
    cout << *k;

  for (k = not_found.begin(); k != not_found.end(); ++k)
    cout << *k;

  return 0;
}
