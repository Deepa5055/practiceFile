function factorial(number) {
  fact = number === 0 ? 1 : number * factorial(number - 1);
  return fact;
}

const num = 5;
const result = factorial(num);
console.log(result);
