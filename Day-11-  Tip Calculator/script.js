'use strict';

const billAmount = document.getElementById('bill-amount');

const fixedTip = document.getElementById('fixed-tip');

const percentageTip = document.getElementById('percentage-tip');

const numberOfPeople = document.getElementById('people-split');

const calculate = document.getElementById('calculateBtn');

const result = document.getElementById('result-section');

calculate.addEventListener('click', function () {
  const bill = parseFloat(billAmount.value);
  const tipFixed = parseFloat(fixedTip.value);
  const tipPercentage = parseFloat(percentageTip.value);
  const people = parseFloat(numberOfPeople.value);

  let tipAmount = 0;
  if (tipFixed > 0) {
    tipAmount = tipFixed;
  } else if (tipPercentage > 0) {
    tipAmount = bill * (tipPercentage / 100);
  }
  const totalWithTip = bill + tipAmount;
  const amountPerPerson = totalWithTip / people;

  const message = `Total bill is ${totalWithTip} and per person is ${amountPerPerson}`;

  result.textContent = message;
});
