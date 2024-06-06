// Three ways to sum to n
var sum_by_loop = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

var sum_by_Gauss = function (n) {
  return (n * (n + 1)) / 2;
};

var sum_by_reduce = function (n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  const sum = arr.reduce((a, b) => a + b);
  
  return sum;
};
