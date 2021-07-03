#include <assert.h>
#include <stdio.h>
#include <stdlib.h>

/*
 * Calculates factorial.
 * Overflow is not checked/handled.
 */
int factorial(int x) {
  assert(x >= 0);
  int result = 1;
  for (int i = 1; i <= x; ++i) {
    result *= i;
  }
  return result;
}

int main(int argc, char* argv[]) {
  assert(argc == 2);
  int x = atoi(argv[1]);
  int result = factorial(x);
  printf("%d\n", result);
  return EXIT_SUCCESS;
}
