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

function setBalance(value) {
  const balanceElements = document.getElementById("balance");
  balanceElements.innerText = value;
}
