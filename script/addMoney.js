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
    // 1 get history container 
    const addMoneyHistory= document.getElementById('history-container')
    // 2 create new div
    const newDive = document.createElement('div')
    // 3 new div innerHTML create
    newDive.innerHTML=`
    <div class="transaction-card bg-base-200 p-5 mx-2 rounded">
    Success Add Money ${accno}
    ${bankAccount}:${amount} TK  ${new Date()}
    </div>
    `
    // 4
    addMoneyHistory.append(newDive)

  } else {
    alert("Invalid Pin");
    return;
  }
});
