const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const pricesArray = prices.map((number, index) => {
  return {
    price: number,
    salePrice: number / 2,
  };
});

console.log(pricesArray);

const formattedPrices = prices.map((number) => {
  return `$${number.toFixed(2)}`;
});

console.log(formattedPrices);
