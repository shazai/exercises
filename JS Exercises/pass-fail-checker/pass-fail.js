let score = 95;

if (score < 0 || score > 100) {
console.log(`Score: ${score} — Invalid score`);
} else if (score >= 75) {
console.log(`Score: ${score} — Passed`);
} else {
console.log(`Score: ${score} — Failed`);
}