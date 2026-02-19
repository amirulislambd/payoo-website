document.getElementById("cashOut-btn").addEventListener("click", function () {
  const cashOutNumber = getValueFromInput("phone-number");
  if (cashOutNumber.length !== 11) {
    alert("Invalid agent number");
  }
  const cashOutAmount = getValueFromInput("cashOte-amount");
  const balance = getValueFromInput("balance");
  // 4 calculate new balance
  const newBalance = Number(balance) - Number(cashOutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  } else {
    alert(`
            Success Cash Out
            ${cashOutNumber}:${cashOutAmount} TK 
            ${new Date()}`);
    setBalance(newBalance);
    // 1 get history container
    const addMoneyHistory = document.getElementById("history-container");
    // 2 create new div
    const newDive = document.createElement("div");
    // 3 new div innerHTML create
    newDive.innerHTML = `
            <div class="transaction-card bg-base-200 p-5 mx-2 rounded">
            Success Cash Out
            ${cashOutNumber}:${cashOutAmount} TK 
            ${new Date()}
            </div>
            `;
    // 4
    addMoneyHistory.append(newDive);
  }
  const pin = getValueFromInput("pin");
  if (pin.length !== 4) {
    alert("Invalid pin");
    return;
  }


});
