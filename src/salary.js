let readlineSync = require("readline-sync");

const contribution = 0.07;
const federalTax = 0.157;
const stateTax = 0.0447;
const socialSecurity = 0.062
const medicare = 0.0145;

let annualSalary = readlineSync.question("\nAnnual Salary: ");
const salaryCont = annualSalary * contribution;
annualSalary = annualSalary - salaryCont;

const salaryFederal = annualSalary * federalTax;
const salaryState = annualSalary * stateTax;
const salarySocial = annualSalary * socialSecurity;
const salaryMedicare = annualSalary * medicare;
let paycheck = annualSalary - salaryFederal - salaryState - salarySocial - salaryMedicare;
paycheck /= 24;
paycheck = paycheck.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + paycheck + ".");
