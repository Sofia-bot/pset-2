const readlineSync = require("readline-sync");

const wage = readlineSync.question("\nHourly Wage: ");
const mon = readlineSync.question("\nMonday: ") * wage;
const tues = readlineSync.question("Tuesday: ") * wage;
const wed = readlineSync.question("Wednesday: ") * wage;
const thurs = readlineSync.question("Thursday: ") * wage;
const fri = readlineSync.question("Friday: ") * wage;
const sat = readlineSync.question("Saturday: ") * wage;
const sun = readlineSync.question("Sunday: ") * wage;

let total = mon + tues + wed + thurs + fri + sat + sun;
total = total.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYou'll make $" + total + " this week.");
