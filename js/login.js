
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
    let email = document.getElementById('emailField');
    let pass = document.getElementById('passField');

    if (email.value == 'abc@gmail.com' && pass.value == '1234') {
        window.location.href = 'banking.html';
    }
    if (email.value == '') {
        email.style.border = '2px solid red';
        const warning1 = document.getElementById('warning1');
        warning1.innerText = "Provide your Email"
    } else {
        email.style.border = '1px solid white';
        const warning1 = document.getElementById('warning1');
        warning1.innerText = ""
    }
    if (pass.value == '') {
        pass.style.border = '2px solid red';
        const warning2 = document.getElementById('warning2');
        warning2.innerText = "Provide your password"
    } else {
        pass.style.border = '1px solid white';
        const warning1 = document.getElementById('warning2');
        warning1.innerText = ""
    }

    if ((email.value != '' && pass.value != '') && (email.value != 'abc@gmail.com' || pass.value != '1234')) {
        const warning = document.getElementById('warning1');
        email.style.border = '1px solid red'
        pass.style.border = '1px solid red'
        warning.innerText = "Wrong password or email!!!!"
    }

})