#include <stdio.h>
int main()
{ printf("Decimal to binary\n");
  int n, c, k;
 n=2; 
printf("%d in binarysystem is:-",n);
  printf("\n");
  for (c = 15; c >= 0; c--)
  {
    k = n >> c;
    if (k & 1)
    printf("1");
  else
     printf("0");
  }
  printf("\n");
 return 0;}
