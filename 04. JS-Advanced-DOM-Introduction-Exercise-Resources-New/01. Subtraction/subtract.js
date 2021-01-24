function subtract() {
    let first = document.getElementById('firstNumber').value;
    let second = document.getElementById('secondNumber').value;
    let result = Number(first) - Number(second);

    document.getElementById('result').textContent = result;

    console.log(result);
}