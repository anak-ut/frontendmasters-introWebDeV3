let frameBtn = document.querySelector('.frame');
let display = document.querySelector('.display'); // layar


frameBtn.addEventListener('click', function(event){
    let key= event.target;
    let action= key.dataset.action;
    let keyContent= key.textContent;
    let displayNum= display.textContent;

    if (!action){
        console.log('angka ter-klik');
        Array.from(key.parentNode.children).forEach(k=>k.classList.remove('pressed'));

        if (displayNum === '0'){
            display.textContent = keyContent;
        } else {
            display.textContent = displayNum + keyContent;
        }
    } else if (action == 'add' || action =='subtract'
        || action == 'multiply' || action == 'divide' || action == 'divide') {
            console.log('oprator ter-klik');
            key.classList.add('pressed')
    } else if (action == 'clear'){
            console.log('clear ter-klik');
    } else {
        console.log('equal ter-klik');
    }
        display.innerText = `${event.target.innerText}`;
});