const learnerName = "Ana Santos";
const score1 = 90;
const score2 = 85;
const score3 = 88;
function isValidScore(score) {
return score >= 0 && score <= 100;
}
function calculateAverage(a, b, c) {
return (a + b + c) / 3;
}
function getResult(a, b, c) {
if (!isValidScore(a) || !isValidScore(b) || !isValidScore(c)) {
return "Invalid score";
}
const average = calculateAverage(a, b, c);
if (average >= 75) {
return "Passed";
}
return "Failed";
}
const average = calculateAverage(score1, score2, score3);
const result = getResult(score1, score2, score3);
console.log(`${learnerName} has an average of ${average.toFixed(2)} and ${result}.`);