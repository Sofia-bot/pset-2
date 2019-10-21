const readlineSync = require("readline-sync");

const mm = 25.4;
const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");
const area = width * length * mm;
const areaFormat = area.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaFormat + " square millimeter(s).");
