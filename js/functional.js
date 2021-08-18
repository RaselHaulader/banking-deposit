// catch input id and returns its value
function inputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    inputField.value = '';
    return inputFieldValue;
};
// get current amount from display and returns its
function getCurrentAmount(currentAmount) {
    const amountDisplay = document.getElementById(currentAmount);
    const amountText = amountDisplay.innerText;
    const amountValue = parseFloat(amountText);
    return amountValue;
};
// add amount to display
function updateAmount(currentAmount, newAmount, work) {
    const amountDisplay = document.getElementById(currentAmount);
    const getCurrentAmountValue = getCurrentAmount(currentAmount)
    if (work == 'add') {
        amountDisplay.innerText = getCurrentAmountValue + newAmount
    } else {
        amountDisplay.innerText = getCurrentAmountValue - newAmount
    };
};
// validation func
function validationFunc(id, warning) {
    const warningField = document.getElementById(id);
    warningField.innerText = warning;
};
// deposit function
document.getElementById('depositBtn').addEventListener('click', function () {
    const depositValue = inputValue('depositField');
    if (depositValue > 0) {
        updateAmount('depositDisplay', depositValue, 'add');
        updateAmount('totalDisplay', depositValue, 'add');
        validationFunc('depositError', '');
    } else {
        const warningMsg = 'Invalid input'
        validationFunc('depositError', warningMsg)
    }
});
// withdraw function
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawValue = inputValue('withdrawField');
    const currentBalance = getCurrentAmount('totalDisplay');
    if (withdrawValue <= currentBalance && withdrawValue > 0) {
        updateAmount('withdrawDisplay', withdrawValue, 'add');
        updateAmount('totalDisplay', withdrawValue, 'minus');
        validationFunc('withdrawError', '')
    } else if (withdrawValue > currentBalance) {
        const warningMsg = 'Insufficient balance'
        validationFunc('withdrawError', warningMsg)
    } else {
        const warningMsg = 'Invalid input'
        validationFunc('withdrawError', warningMsg)
    }
});