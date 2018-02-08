
function fib() {
  const fibo = [0];
  let prev = 0;
  let current = 1;
  for (let i = 1; i < 100; i++) {
    fibo.push(current);
    const next = prev + current;
    prev = current;
    current = next;
  }
  return fibo;
}

console.log(fib());

const testArray = [1, 2, 3, 4];

function numToStrings(array) {
  return _.map(array, num => `${num}`);
}

console.log(numToStrings(testArray));

function numEvenNums(array) {
  return _.filter(array, num => ((num % 2) === 0)).length;
}

console.log(numEvenNums(fib()));
