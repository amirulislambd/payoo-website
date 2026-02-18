document.getElementById('cashOut-btn').addEventListener('click', function(){
    const cashOutNumber = getValueFromInput('phone-number')
    if(cashOutNumber.length !== 11){
alert('Invalid agent number')
    }
    const cashOutAmount = getValueFromInput('cashOte-amount')
    const balance = getValueFromInput('balance')
    // 4 calculate new balance 
    const newBalance = Number(balance)-Number(cashOutAmount)
    console.log(newBalance)
    if(newBalance<0){
        alert('Invalid Amount')
        return
    }else{
        alert('Success Cash out')
        setBalance(newBalance)
    }
    const pin =getValueFromInput('pin')
    if(pin.length !== 4){
        alert('Invalid pin')
        return
    }
   

    // 1 get agent number & validate
//     const cashOteNumberInput = document.getElementById('phone-number')
//     const cashOutNumber = cashOteNumberInput.value
// if(cashOutNumber.length !== 11){
//     alert('Invalid agent number')
//     return
// }
// console.log(cashOutNumber)
//     // 2 get the amount validate convert to number
//     const cashOteAmountInput = document.getElementById('cashOte-amount')
//     const cashOutAmount = cashOteAmountInput.value
//     console.log(cashOutAmount)
//     // 3 get the current balance convert to number
//     const balanceElement= document.getElementById('balance')
//     const balance = balanceElement.innerText
//     console.log(balance)
//     // 4 calculate new balance 
//     const newBalance = Number(balance)-Number(cashOutAmount)
//     if(newBalance<0){
//         alert('Invalid Amount')
//         return
//     }
//     console.log(newBalance)
//     // 5 get the password and verify
//     const cashOutPinInput =document.getElementById('pin')
//     const cahOutPinValue = cashOutPinInput.value
//     if(cahOutPinValue.length == 4){
//         // 5-1 true:: show an alert > set Balance
//         alert('cash out success')
//         balanceElement.innerText=newBalance
//     }else{
//         // 5-2 true:: show an error alert > return
// alert('Invalid pin')
//     }
})