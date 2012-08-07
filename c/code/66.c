#include <stdio.h> 
int main()
 {   printf("\n");
int n=10, c, k, space = 0;
char ch, temp;
ch = 'A'+n-1;
temp = ch;
 for ( k = n ; k >= 1 ; k-- )
{ for( c = 1 ; c <= space; c++
 printf(" ");
space++;
 for ( c = 1 ; c <= k ; c++ )
 {printf("%c",temp);
        temp--;}
   printf("\n");
    ch--;
   temp = ch;}
   return 0;}
