const scores = [90, 80, 85, 95, 75];

const total = scores.reduce((sum, score) =>{
    return sum + score;
}, 0);

const average = total / scores.length;

console.log(`Total: ${total}`);
console.log(`Average: ${average}`);

const cart = [
{productItem: "Keyboard", price:850, qty:1}, 
{productItem: "Mouse", price:450, qty:2}
];

const totalPrice = cart.reduce((sum, item)=>{
    return sum+item.price*item.qty;
},0);

console.log(totalPrice);