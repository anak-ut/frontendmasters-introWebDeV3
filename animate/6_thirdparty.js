const ball = document.querySelector('.ball');
popmotion.animate({
    from: '0px',
    to: '100px',
    repeat: Infinity,
    repeatType: 'reverse',
    type: 'spring',
    onUpdate(update){
        ball.style.top = update;
    }
});