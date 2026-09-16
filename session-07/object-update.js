const product = {
    name: "Mouse", 
    price: 450, 
    stock: 10
};

product.price = 500;
product.stock = product.stock -1;
product.inStock = product.stock >0;

console.log(product);
