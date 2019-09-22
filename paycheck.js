 /*
 NOTES:

    hoursWorked = week1 + week2;
   untaxedMoney = hoursWorked * payrate;
   contribution = (${num}--> percentage converted to a decimal)
   retire = contribution * untaxedMoney;
   untaxedMoney - retire = taxableIncome;

   taxes = .15 * taxableIncome;
   disability = .007 * taxableIncome;
   healthIns = 39.23;

   paycheck = taxableIncome - (healthIns + disability + taxes);

 */

/**************/
/* FIRST STEP*/
/************/
"use strict";

//declare all variables

let hours1, hours2, totalHours, minutes1, minutes2, totalMinutes,hoursWorked, untaxedMoney, contribution, retire, taxableIncome, checkbox,  uncleSam, hurtYerself, paycheck, healthIns;


// Hard numbers and percentages
const taxes = .15;
const disability = .007;


function getPaid()
{
  // Retrieve values from weeks 1 and 2 (hours1, hous2, minutes1, minutes2)
  hours1 = Number(document.getElementById("hours1").value);
  hours2 = Number(document.getElementById("hours2").value);

  minutes1 = Number(document.getElementById("minutes1").value);
  minutes2 = Number(document.getElementById("minutes2").value);

  //Retrieve payRate
  payRate = Number(document.getElementById("payRate").value);

  // Retrieve retirement contribution percentage and turn into decimal
  contribution = (Number(document.getElementById("contribution").value)) / 100;

  //Add up all the hours into one number which will be rounded to 2 decimal places

  
  totalHours = hours1 + hours2;
  totalMinutes = minutes1 + minutes2;

  hoursWorked = totalHours + (totalMinutes/ 60);

  // Play with all the pre-tax money
  untaxedMoney = (payRate * hoursWorked).toFixed(2);
  retire = (untaxedMoney * contribution).toFixed(2);

  // And then play with all the taxable money
  taxableIncome = untaxedMoney - retire;

  hurtYerself = disability * taxableIncome;
  uncleSam = taxes * taxableIncome;

  // If box is checked, value of healthIns is 39.23; if not, it's el zilcho
  if(document.getElementById('healthIns').checked){
    healthIns = 39.23;
  } else {
    healthIns = 0;
  }

  paycheck = taxableIncome - (healthIns + hurtYerself + uncleSam); 

  alert(`You worked ${hoursWorked.toFixed(2)} hours this pay period. Your untaxed income is ${untaxedMoney} American Doll Hairs. You contributed ${retire} US doll hairs to your retirement account this paycheck, leaving $${taxableIncome} for the government to siphon from! Your employer deducted $${hurtYerself.toFixed(2)} in the event that you'd hurt yourself and Uncle Sam took $${uncleSam.toFixed(2)} for Trump's spray tan fund, leaving you with a piddly $${paycheck.toFixed(2)} to spend at your leisure. Ain't life grand?`);

}





// 