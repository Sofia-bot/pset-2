const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const diagonal = Math.hypot(width, length);
const diagonalFormat = diagonal.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonalFormat + " inch(es).");
