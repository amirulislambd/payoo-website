document.getElementById("transfer-btn").addEventListener("click", function () {
  const transferNumber = getValueFromInput("transfer-number");
  if (transferNumber.length !== 11) {
    alert("Invalid Transfer Number");
    return;
  }
  const transferPin = getValueFromInput("transfer-pin");
  if(transferPin.length !== 4){
    alert('Invalid Pin')
    return
  }
  const transferMoney = getValueFromInput("transfer-amount");
  const balance = getValueFromInput('balance')
  const newBalance = Number(balance)-Number(transferMoney)
  if(newBalance <0 ){
    alert("Invalid amount")
  }else{
    alert(`
        Success Your Transfer Money
        Transfer Number: ${transferNumber}
        Transfer Money: ${transferMoney}
        ${new Date()}
        `)
        setBalance(newBalance)

    const transferHistory = document.getElementById('history')
    const createInnerHtml= document.createElement('div')
    createInnerHtml.innerHTML=`
    <div class="transaction-card bg-base-200 p-5 mx-2 rounded">
    Success Your Transfer!!
        Transfer Number: ${transferNumber}
        Transfer Money: ${transferMoney}
        ${new Date()}
    </div>
    `
    transferHistory.append(createInnerHtml)

  }
 
});
