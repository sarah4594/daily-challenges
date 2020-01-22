/*


a = a x a     1 = 1 x 1
b = b x b     2 = 2 x 2

n, m = n x n  1, 2 = 1 x 2

so a + b has to be smalle ror equal to m or n (whichever is bigger)
AND m or n (whichever is smaller) has to be bigger than the biggest size

*/

export const fit_in = (a: number, b: number, m: number, n: number): boolean => {
  if (a + b <= Math.max(m, n)) return Math.min(m, n) >= Math.max(a, b)
  else return false
}
