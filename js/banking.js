
let depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {
    const depositDisplay = document.getElementById('depositDisplay');
    const totalDisplay = document.getElementById('totalDisplay');
    const depositField = document.getElementById('depositField');
    depositDisplay.innerText = parseFloat(depositDisplay.innerText) + parseFloat(depositField.value)
    totalDisplay.innerText = parseFloat(totalDisplay.innerText) + parseFloat(depositField.value)
    depositField.value = '';
})
let withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {

    const withdrawDisplay = document.getElementById('withdrawDisplay');
    const totalDisplay = document.getElementById('totalDisplay');
    const withdrawField = document.getElementById('withdrawField');
    withdrawDisplay.innerText = parseFloat(withdrawDisplay.innerText) + parseFloat(withdrawField.value);
    totalDisplay.innerText = parseFloat(totalDisplay.innerText) - parseFloat(withdrawField.value);
    withdrawField.value = '';

})

console.log(document.querySelector('.rounded'))