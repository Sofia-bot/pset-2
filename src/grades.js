let readlineSync = require("readline-sync");

let grade = 0;
const homeworkWeight = .15;
const quizWeight = .35;
const testWeight = .5;

function gradeCalc(grade, gradeAvg) {
  gradeAvg = Number(grade);
  grade = Number(readlineSync.question());
  gradeAvg += Number(grade);
  grade = Number(readlineSync.question());
  gradeAvg += Number(grade);
  return gradeAvg / 3;
}

grade = Number(readlineSync.question("\nEnter three homework grades.\n"));
let homeworkAvg = gradeCalc(grade, 0);
homeworkAvg *= homeworkWeight;

grade = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let quizAvg = gradeCalc(grade, 0);
quizAvg *= quizWeight;

grade = Number(readlineSync.question("\nEnter three test grades.\n"));
let testAvg = gradeCalc(grade, 0);
testAvg *= testWeight;

const finalGrade = homeworkAvg + quizAvg + testAvg;

console.log ("\nYour marking period grade is " + finalGrade + "%");
