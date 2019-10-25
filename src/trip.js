const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus Capacity: "));

const passengers = students + teachers;
let busCount = passengers / capacity;
busCount = Math.ceil(busCount);
let remainder = passengers % capacity;

console.log("\n" + busCount + " bus(es) is (are) needed, with " + remainder + " passenger(s) on the last bus.");
