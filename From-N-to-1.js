function fromOneToN(n) {
  n = Number(n);
  let arr = [];

  for (let i = n; i >= 1; i--) {
    arr.push(i);
  }
  return arr.join(`\n`);
}

console.log(fromOneToN(5));
