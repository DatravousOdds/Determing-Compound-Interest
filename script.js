// Define variables
let principalAmount = 0.00;
let annualInterestRate = 0.00;
let numberOfYears = 0;
let compoundedInterest = 1;
let endOfInvestment = 0.00;


while (true) {
  // prompt for input
  endOfInvestment = prompt("What is the amount you want to reach? ");
  annualInterestRate = prompt("What is the rate? ");
  numberOfYears = prompt("What is the number of years? ");
  compoundedInterest = prompt("What is the number of times interest is compounded per year? ");

  // check for invalid input
  if (isNaN(endOfInvestment) || endOfInvestment < 0 || isNaN(annualInterestRate) || annualInterestRate < 0 || isNaN(numberOfYears) || numberOfYears < 0) {
    alert("Please enter valid input for all fields");
    continue;
  } else {
    // convert input to numerical date
    endOfInvestment = parseFloat(endOfInvestment);
    annualInterestRate = parseFloat(annualInterestRate);
    numberOfYears = parseInt(numberOfYears);
    compoundedInterest = parseInt(compoundedInterest);

    // convert annual interest rate to monthly interest rate
    annualInterestRate = (annualInterestRate / 100);
    console.log(annualInterestRate)


    // determine the initial amount needed to reach a specific goal
    principalAmount = endOfInvestment / Math.pow((1 + annualInterestRate / compoundedInterest), compoundedInterest * numberOfYears);



    // Display results 
    alert(`You will need $${principalAmount.toFixed(2)} in ${numberOfYears} years with an annual interest rate of ${(annualInterestRate * 100).toFixed(2)}%.`);
    break;
  }
}




