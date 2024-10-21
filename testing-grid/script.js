let frameBtn = document.querySelector('.frame');
let display = document.querySelector('.display');
frameBtn.addEventListener('click', function(event){
    display.innerText = `${event.target.innerText}`;
    
})