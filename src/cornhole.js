const length = 48;
const width = 24;
const diameter = 6;

const face = length * width;
const hole = Math.PI * (diameter / 2) ** 2;
let surfaceArea = face - hole;
surfaceArea = surfaceArea.toLocaleString ("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole Board is " + surfaceArea + " inch(es).")
