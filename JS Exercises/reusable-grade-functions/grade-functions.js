function calculateAverage(score1, score2, score3) {
    const total = score1 + score2 + score3;
    const average = total / 3;
    return average;
}

function getResult(average) {
    if (average >= 75) {
         return "Passed";
    } else {
        return "Failed";
    }
}
const average = calculateAverage(80, 90, 85);
const result = getResult(average);
console.log(
`The student's average is ${average.toFixed(2)}. Result: ${result}.`
);