let runningTotal =0;
let buffer = '0';
let previousOperator;
const screen =  document.querySelector('.screen');
const button = document.querySelector('.calc-buttons');

function init(){
    button.addEventListener('click', event => {buttonClick(event.target.innerText); 
        console.log(event.target);
        console.log(typeof(event.target.innerText));

    })
    //rerender();
}

function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
        console.log('ini simbol', value);
    } else {
        handleNumber(value);
        console.log('ini number', value);
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

function handleSymbol(symbol){
    switch (symbol){
        case 'clear' :
            buffer= '0';
            break;
        case '<-' :
            console.log('delete pressed');
            break;
        case '=' :
            console.log('equal pressed');
            break;
        case '+' :
            console.log('add pressed');
            break;
        case '-' :
            console.log('minus pressed');
            break;
        case 'x' :
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

