document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const selected = getValueFromInput("pay-bill-service");
  const billerNumber = getValueFromInput("pay-bill-number");
  console.log(billerNumber.length);
  if (selected == "Select a Service") {
    alert("Please Select a Service");
    return;
  } else if (billerNumber.length < 4 || billerNumber.length > 15) {
    alert("Invalid Account Number");
    return;
  }
  const payBillAmount = getValueFromInput("pay-bill-amount");
  const balance = getBalance("balance");
//   if (payBillAmount === 0 || payBillAmount > balance) {
//     alert("Invalid Amount");
//     return
//   }
const convertBalance = Number(payBillAmount)
  const newBalance = Number(balance) - Number(payBillAmount);
  if (convertBalance <= 0 || payBillAmount>balance) {
    alert("Invalid Amount");
    return;
  }
  const payBillPin = getValueFromInput("pay-bill-pin");
  if (payBillPin.length < 4) {
    alert("Invalid Pin");
  } else {
    alert(`
    Success Your Pay Bill.
    Biller Number: ${billerNumber}
    Pay Amount: ${payBillAmount}
    ${new Date()}
    `);
    setBalance(newBalance);
  }

  const payBillHistory = document.getElementById("history");
  const createDive = document.createElement("div");
  createDive.innerHTML = `
    <div class="transaction-card bg-base-200 p-5 mx-2 rounded">
    Success Your Pay Bill.
    Biller Number: ${billerNumber}
    Pay Amount: ${payBillAmount}
    ${new Date()}
    </div>
    `;
  payBillHistory.append(createDive);
});
