const scores =[55,80, 74, 95, 88, 62];

const passingScores = scores.filter(score =>{
    return score >=75;
});

console.log(passingScores);

const products = [
    {item:"Keyboard", inStock: true},
    {item:"Mouse", inStock: false},
    {item:"Monitor", inStock: true}
]; 

const available = products.filter(product =>{
    return product.inStock === true;
});

console.log(available);