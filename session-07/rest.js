const calculateTotal = (...prices) => {
return prices.reduce(
(sum, price) => sum + price,
0
);
};
console.log(
calculateTotal(100, 200, 300)
);
