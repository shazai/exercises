const product ={
    id: 1, 
    itemName: "Mechanical Keyboard", 
    price: 1500, 
    category: "Accessories",
    inStock: true
};

//Dot Notation
console.log(product);
console.log(product.itemName);
console.log(product.price);
console.log(product.inStock);

// Bracket Notation
console.log(product["itemName"]);

//Dynamic
const field = "price";
console.log(product[field]);