document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault()
    const inputNumber =document.getElementById('phone-number')
    const contactNumber = inputNumber.value
    const numberPattern = /^01\d{9}$/
    const passwordInput =document.getElementById('password')
    const password = passwordInput.value
    // console.log(contactNumber, password)
    if(!numberPattern.test(contactNumber)){
        alert('Please Enter your valid phone number and start with 01')
        return

        
    }else if(contactNumber.length <11 && password.length == 4){
        alert('Login failed')
        return
    }else if(password < 4){
        alert('Wrong Your Password')
        return
    }else{
        window.location.replace('./home.html')
    }
})