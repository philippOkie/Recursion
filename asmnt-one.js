function fibs(n) {
  let arr = [0, 1];

  for (let i = 1; i < n; i++) {
    let fib = arr[i - 1] + arr[i];
    arr.push(fib);
  }
  console.log(arr);
}

function fib(n) {
  if (n === 2 || n === 1) return 1;
  else {
    console.log(fib(n - 1) + fib(n - 2));
    return fib(n - 1) + fib(n - 2);
  }
}
fib(10);
