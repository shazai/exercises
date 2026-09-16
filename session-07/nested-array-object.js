const order ={
    id : "ORD-001", 
    customer:{
        name: "Mia Reyes", 
        email: "mia@example.com"
    }, 
    items:[
        {product:"Keyboard", Qty:1},
        {product:"Mouse",Qty:2}
    ]
};
console.log(order.customer.name);
console.log(order.items[0].product);
console.log(order.items[1].Qty);
