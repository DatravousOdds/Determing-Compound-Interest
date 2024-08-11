// Define variables
let principalAmount = 0.00;
let annualInterestRate = 0.00;
let numberOfYears = 0;
let compoundedInterest = 1;
let endOfInvestment = 0.00;


while (true) {
  // prompt for input
  principalAmount = prompt("What is the principal amount? ");
  annualInterestRate = prompt("What is the rate? ");
  numberOfYears = prompt("What is the number of years? ");
  compoundedInterest = prompt("What is the number of times interest is compounded per year? ");

  // check for invalid input
  if (isNaN(principalAmount) || principalAmount < 0 || isNaN(annualInterestRate) || annualInterestRate < 0 || isNaN(numberOfYears) || numberOfYears < 0) {
    alert("Please enter valid input for all fields");
    continue;
  } else {
    // convert input to numerical date
    principalAmount = parseFloat(principalAmount);
    annualInterestRate = parseFloat(annualInterestRate);
    numberOfYears = parseInt(numberOfYears);
    compoundedInterest = parseInt(compoundedInterest);

    // convert annual interest rate to monthly interest rate
    annualInterestRate = (annualInterestRate / 100);


    // calculate compound interest
    endOfInvestment = principalAmount * Math.pow((1 + annualInterestRate / compoundedInterest), compoundedInterest * numberOfYears);



    // Display results
    alert(`$${principalAmount} invested at ${annualInterestRate * 100}% for ${numberOfYears} years compounded ${compoundedInterest} times per year is $${endOfInvestment.toFixed(2)}.`);
    break;
  }
}




