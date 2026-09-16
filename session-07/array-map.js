const prices = [100, 250, 500];

const formattedPrices = prices.map(price=>{
    return "₱" + price;
});

console.log(formattedPrices);

const products = [
    {name: "Keyboard", price: 850}, 
    {name: "Monitor", price: 6500},    
    {name: "Mouse", price: 450}, 
]; 

const names = products.map(product=>product.name);

const tag = products.map(product=>product.price);

console.log(names);
console.log(tag);