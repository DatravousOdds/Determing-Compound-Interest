// Define variables
let principalAmount = 0.00;
let annualInterestRate = 0.00;
let numberOfYears = 0;
let compoundedInterest = 1;
let endOfInvestment = 0.00;

// prompt for input
principalAmount = prompt("What is the principal amount?");
annualInterestRate = prompt("What is the rate");
numberOfYears = prompt("What is the number of years");



// convert input to numerical date
principalAmount = parseFloat(principalAmount);
annualInterestRate = parseFloat(annualInterestRate);
numberOfYears = parseInt(numberOfYears);
compoundedInterest = parseInt(compoundedInterest);

annualInterestRate = (annualInterestRate / 100);
console.log(annualInterestRate);

// calculate compound interest
endOfInvestment = principalAmount * Math.pow((1 + annualInterestRate / compoundedInterest), compoundedInterest * numberOfYears);
console.log("End of Investment: ", endOfInvestment.toFixed(2));

// Round to 2 decimal places
// Math.round(endOfInvestment)

// Display results
// consloe.log("The end of investment is " + endOfInvestment)
