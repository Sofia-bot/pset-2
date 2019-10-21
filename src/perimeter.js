const readlineSync = require("readline-sync");

const cm = 2.54;
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const perimeter = width * length * cm;
const perimeterFormat = perimeter.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an perimeter of " + perimeterFormat + " square centimeter(s).");
