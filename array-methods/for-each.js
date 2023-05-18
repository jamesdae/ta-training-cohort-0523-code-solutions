const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');

values.forEach((number, index) => {
  console.log(number);
});

console.log('Reverse:');

values.forEach((number, index) => {
  console.log(values[values.length - 1 - index]);
});
