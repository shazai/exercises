const bootcampTools = [
    "VS Code", 
    "Github", 
    "Discord", 
    "Node.js",
    "Git"
];

console.log(bootcampTools[0]);
console.log(bootcampTools[2]);
console.log(bootcampTools[4]);

console.log(bootcampTools[5]);

//Push
bootcampTools.push("notes");
console.log(bootcampTools);

//Pop
const lastTools = bootcampTools.pop();
console.log(lastTools);

bootcampTools.unshift("Terminal");

bootcampTools.shift();

const copy = bootcampTools.slice(0,2);

bootcampTools.splice(1,1,"Chrome");


console.log(bootcampTools)

console.log(bootcampTools.length);

console.log(bootcampTools[bootcampTools.length - 1]);