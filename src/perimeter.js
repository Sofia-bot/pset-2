const readlineSync = require("readline-sync");

const cm = 2.54;
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
let perimeter = 2 * width + 2 * length;
perimeter *= cm;
perimeter = perimeter.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an perimeter of " + perimeter + " square centimeter(s).");
