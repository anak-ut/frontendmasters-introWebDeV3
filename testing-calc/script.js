const frame = document.querySelector('.frame');
const displayCalc = document.querySelector('.display');
let firstNumber = '';  // Menyimpan angka pertama
let secondNumber = '';  // Menyimpan angka kedua
let operator = '';  // Menyimpan operator
let result = 0;

frame.addEventListener('click', function(event){
    let key = event.target;
    let action = key.dataset.action;
    let keyContent = key.textContent;
    if (!action) {
        handleNumber(keyContent);
        // displayCalc.innerText = `${box1} ${operator} ${box2}`.trim();
        console.log('angka tertekan');
    } else if (action === 'operator' ) {
        handleOperator(keyContent);
    } else if (action === 'equal') {
        calculate();
    } else if (action === 'clear'){
        clearCalculator()
    }
    updateDisplay();
});

function handleNumber(value) {
    if (operator === '') {
        // Jika operator belum ditekan, simpan di box1
        // box1 = box1.concat('', nilai);
        firstNumber += value;
        console.log('nilai-1:', firstNumber);
    } else {
        // Jika operator sudah ditekan, simpan di box2
        // box2 = box2.concat('', nilai);
        secondNumber += value;
        console.log('nilai-2:', secondNumber);
    }
}

function handleOperator(op) {
    if (firstNumber !==''){
        if (secondNumber !==''){
            calculate()
        } operator = op ;
    }
}

function calculate() {
   if (firstNumber !== '' && secondNumber !== '' & operator !== ''){
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch(operator){
        case '+' :
            result = num1 + num2;
            break;
        case '-' :
            result = num1 - num2;
            break;
        case 'x' :
            result = num1 * num2;
            break;
        case ':' :
            if (num2 !== 0){
                result = num1 / num2;
            } else {
                alert(' cannot divided by zero');
                clearCalculator();
                return;
            }
            break;
    }
    firstNumber = result.toString();
    secondNumber = '';
    operator = '';
    result = 0;
   }
}

function updateDisplay() {
    if (result !== 0){
        displayCalc.textContent = result;
    } else {
        displayCalc.textContent = `${firstNumber} ${operator} ${secondNumber}`.trim();
    }
}