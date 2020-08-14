//Calculate Tip
function calculateTip() {
  var cost = document.getElementById("cost").value;
  var numOfBills = document.getElementById("numOfBills").value;
  var tipPercent = document.getElementById("tipPercent").value;
 

  //validate input
  if (cost === "" || tipPercent == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfBills === "" || numOfBills <= 1) {
    numOfBills = 1;
    document.getElementById("finalTipAmount").style.display = "none";
  } else {
    document.getElementById("finalTipAmount").style.display = "block";
  }

  //Calculate tip
  var total = (cost * tipPercent) / numOfBills;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("tipAmount-container").style.display = "block";
  document.getElementById("tipAmount").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("tipAmount-container").style.display = "none";
document.getElementById("finalTipAmount").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};