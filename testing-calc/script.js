let frame = document.querySelector('.frame');
let displayCalc = document.querySelector('.display');
let box1 = '';  // Menyimpan angka pertama
let box2 = '';  // Menyimpan angka kedua
let operator = '';  // Menyimpan operator
let hasil = 0;

frame.addEventListener('click', function(event){
    let key = event.target;
    let action = key.dataset.action;
    let keyContent = key.textContent;
    let varElement = document.querySelector('.op');

    if (!action) {
        angkaAction(keyContent);
        displayCalc.innerText = `${key.innerText}`;
        // console.log('angka tertekan');
    } else if (action ) {
        operatorAction('+');
        // console.log('operator tertekan');
        displayCalc.innerText = `${key.innerText}`;

    } else if (action === 'equal') {
        hitung();
        // console.log(' = tertekan');
        displayCalc.innerText = `${hasil}`;

    }
});

function angkaAction(nilai) {
    if (operator === '') {
        // Jika operator belum ditekan, simpan di box1
        box1 = box1.concat('', nilai);
        console.log('box1:', box1);
    } else {
        // Jika operator sudah ditekan, simpan di box2
        box2 = box2.concat('', nilai);
        console.log('box2:', box2);
    }
}

function operatorAction(op) {
    operator = op;  // Menyimpan operator
    console.log('Operator:', operator);
}

function hitung() {
    if (operator === '+') {
        hasil = parseFloat(box1) + parseFloat(box2);  // Melakukan penjumlahan
    }
    console.log('Hasil:', hasil);
    // Reset setelah perhitungan
    box1 = hasil.toString();
    box2 = '';
    operator = '';
}
