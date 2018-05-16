#include <stdio.h>

int (int);
int main(int argc, char **arcv)
{
	printf("%i\n", fib(1));

	return 0;
}

int (int n)
{
	if(n <= 1)
		return n;
	else
		return fib(n - 1) + fib(n - 2);
}