let frameBtn = document.querySelector('.frame');
let display = document.querySelector('.display');
frameBtn.addEventListener('click', function(event){
    let key= event.target;
    let action=key.dataset.action;
    if (!action){
        console.log('angka ter-klik');
    } else if (action == 'add' || action =='subtract'
        || action == 'multiply' || action == 'divide' || action == 'divide') {
            console.log('oprator ter-klik');
        }
        display.innerText = `${event.target.innerText}`;
});