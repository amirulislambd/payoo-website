function getValueFromInput(id) {
  const input = document.getElementById(id);
  if (input.tagName == "INPUT" || input.tagName == "SELECT") {
    const value = input.value;
    console.log(id, value);
    return value;
  } else {
    const balance = input.innerText;
    console.log(id, balance);
    return balance;
  }
}

function getBalance() {
  const balanceElements = document.getElementById("balance");
  const balance = balanceElements.innerText;
  console.log("current balance");
  return Number(balance);
}
// machine value -> set Balance
function setBalance(value) {
  const balanceElements = document.getElementById("balance");
  balanceElements.innerText = value;
}
// machine id > hide all > show id
function showOnly(id){
    const addMoney = document.getElementById('add-money')
    const cashOut = document.getElementById('cash-out')
    const transaction = document.getElementById('history')
    const transfer = document.getElementById('transfer-money')
    addMoney.classList.add('hidden')
    cashOut.classList.add('hidden')
    transaction.classList.add('hidden')
    transfer.classList.add('hidden')

    const selected = document.getElementById(id)
    selected.classList.remove('hidden')
}