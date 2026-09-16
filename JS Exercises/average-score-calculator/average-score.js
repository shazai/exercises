// ------------------------------------
// Hands-on Lab 4
// Average Score Calculator
// ------------------------------------
const scores = [85, 90, 78, 88, 92];
let total = 0;

// Calculate total using a loop
for (let i = 0; i < scores.length; i++) {
total += scores[i];
}

// Calculate average
const average = total / scores.length;

// Display information
console.log(`Scores: ${scores.join(", ")}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);

// Determine pass or fail
if (average >= 75) {
console.log("Result: Passed");
} else {
console.log("Result: Failed");
}