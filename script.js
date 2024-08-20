const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const years = document.getElementById("years");
const compoundInterest = document.getElementById("compound");
const topScreen = document.getElementById("top-screen");
const clearBtn = document.getElementById("clear");
let principalAmount = "";
let annualInterestRate = "";
let numberOfYears = "";
let compoundedInterest = "";
let endOfInvestment = "";



// submit addEventListener
clearBtn.addEventListner("click", () => {
  amount.value = "";
  rate.value = "";
  years.value = "";
  compoundInterest.value = "";
  topScreen.value = "";
}







if (amount.value > 0 && rate.value > 0 && years.value > 0 && compoundInterest.value) {
  endOfInvestment = parseFloat(amount.value);
  annualInterestRate = parseFloat(rate.value);
  numberOfYears = parseFloat(years.value);
  compounded = parseFloat(compoundInterest.value);
  alert("Please enter vaild input for all fields");
  
} else {
  
  // convert annual interest rate to monthly interest rate
      annualInterestRate = (annualInterestRate / 100);
      console.log(annualInterestRate);

  // determine the initial amount needed to reach a specific goal
      principalAmount = endOfInvestment / Math.pow((1 + annualInterestRate / compoundedInterest), compoundedInterest * numberOfYears);

  // Display the results
  topScreen.innerHMTL = `The initial amount needed to reach the goal is: $${principalAmount.toFixed(2)}`
}

// while (true) {
//   // prompt for input
//   endOfInvestment = prompt("What is the amount you want to reach? ");
//   annualInterestRate = prompt("What is the rate? ");
//   numberOfYears = prompt("What is the number of years? ");
//   compoundedInterest = prompt("What is the number of times interest is compounded per year? ");

//   // check for invalid input
//   if (isNaN(endOfInvestment) || endOfInvestment < 0 || isNaN(annualInterestRate) || annualInterestRate < 0 || isNaN(numberOfYears) || numberOfYears < 0) {
//     alert("Please enter valid input for all fields");
//     continue;
//   } else {
//     // convert input to numerical date
//     endOfInvestment = parseFloat(endOfInvestment);
//     annualInterestRate = parseFloat(annualInterestRate);
//     numberOfYears = parseInt(numberOfYears);
//     compoundedInterest = parseInt(compoundedInterest);

//     // convert annual interest rate to monthly interest rate
//     annualInterestRate = (annualInterestRate / 100);
//     console.log(annualInterestRate)


//     



//     // Display results 
//     alert(`You will need $${principalAmount.toFixed(2)} in ${numberOfYears} years with an annual interest rate of ${(annualInterestRate * 100).toFixed(2)}%.`);
//     break;
//   }
// }




