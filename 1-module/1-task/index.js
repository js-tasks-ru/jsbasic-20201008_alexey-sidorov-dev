/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  // факториал 0 и 1 равен 1
  if (n == 0 || n == 1) {
    return result;
  }

  // вычисляем факториал
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
