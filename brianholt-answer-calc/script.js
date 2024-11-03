let runningTotal = 0;
let buffer = '0';
let previousOperator ;
const screen =  document.querySelector('.screen');
const button = document.querySelector('.calc-buttons');

function init(){
    button.addEventListener('click', event => {buttonClick(event.target.innerText); 
        //console.log(event.target);
        //console.log(typeof(event.target.innerText));

    })
    //rerender();
}

function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
        //console.log('ini simbol', value);
    } else {
        handleNumber(value);
        //console.log('ini number', value);
    }
    rerender();
}

function handleNumber(number){
    if (buffer === '0'){
        buffer = number;
    } else {
        buffer += number;
    }
    // console.log(typeof(buffer));
}


function flushOperation(intBuffer){
    if (previousOperator === '+'){
        runningTotal += intBuffer;
    } else if (previousOperator === '-'){
        runningTotal -= intBuffer;
    } else if(previousOperator === 'x'){
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function handleMath(value){
    if (buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);
    if (runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = value;
    buffer = '0';
    console(runningTotal);
    console.log(value)
}

function handleSymbol(symbol){
    switch (symbol){
        case 'clear' :
            console.log('clear pressed')
            buffer = '0';
            break;
        case '←' :
            console.log('delete pressed');
            if (buffer.length === 1){
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case '=' :
            console.log('equal pressed');
            if (previousOperator === null){
                return;
            } 
            flushOperation(parseInt(buffer));
            break;
        case '+' :
            console.log('add pressed');
            break;
        case '-' :
            console.log('minus pressed');
            break;
        case 'x' :
            handleMath(symbol);
            console.log('multiply pressed');
            break;
        default :
            console.log('divison pressed');
    }
}

function rerender(){
    screen.innerText = buffer;
}



init();

