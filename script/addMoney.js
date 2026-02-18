document.getElementById("add-money-btn").addEventListener("click", function () {
  // 1 bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please Select a Bank");
    return;
  }

  // 2  get bank account number
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("Invalid accno");
    return;
  }
  //  3 get amount
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);
  console.log(newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin.length == 4) {
    alert(`
    Success Add Money
    ${bankAccount}:${amount} TK 
    ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
