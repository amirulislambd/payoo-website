document.getElementById('login-btn').addEventListener('click',function(){
    const numberInput = document.getElementById('phone-number')
    const contactNumber = numberInput.value
    const passwordInput = document.getElementById('password')

    

    const password = passwordInput.value
    // console.log(contactNumber, password)
    if(contactNumber == '01814022917' && password.length == 4){
        alert('Login Success')

        window.location.replace('/home.html')
    }else{
        alert('Login failed')
    }
})