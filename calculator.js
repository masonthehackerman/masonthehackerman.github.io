function calculator() {
    const firstNumber = Number(document.getElementById('firstNumber').value.trim());
    const secondNumber = Number(document.getElementById('secondNumber').value.trim());
    const operator = document.getElementById('operator').value.trim();
    let result = '';

    if (operator === "+") {
        result = firstNumber + secondNumber
    }
    if (operator === "X") {
        result = firstNumber * secondNumber
    }
    if (operator === "*") {
        result = firstNumber * secondNumber
    }
    if (operator === "x") {
        result = firstNumber * secondNumber
    }
    if (operator === "/") {
        result = firstNumber / secondNumber
    }
    if (operator === "-") {
        result = firstNumber - secondNumber
    }
    document.getElementById('calculatorResult').innerText = result;
}