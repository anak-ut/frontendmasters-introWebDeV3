let runningTotal =0;
let buffer = '0';
let previousOperator;
const screen =  document.querySelector('.screen');
const button = document.querySelector('.calc-buttons');

function init(){
    button.addEventListener('click', event => buttonClick(event.target.innerText))
}

function buttonClick(value){
    console.log(value);
    if (isNaN(parseInt(value))){
        handleSymbol(value);
        console.log('ini simbol');
    } else {
        handleNumber(value);
        console.log('ini number');
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

}

function rerender(){
    screen.innerText = buffer;
}

init();

// menit 17:33