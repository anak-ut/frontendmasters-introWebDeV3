let frame = document.querySelector('.frame');
let ceKelas = document.getElementsByClassName('number');
let box1 = '';  // Menyimpan angka pertama
let box2 = '';  // Menyimpan angka kedua
let operator = '';  // Menyimpan operator

frame.addEventListener('click', function(event){
    let key = event.target;
    let action = key.dataset.action;
    let keyContent = key.textContent;

    if (!action) {
        angkaAction(keyContent);
        console.log('angka tertekan');
    } else if (action === 'plus') {
        operatorAction('plus');
        console.log('operator tertekan');
    } else if (action === 'equal') {
        hitung();
        console.log(' = tertekan');
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
    let hasil = 0;
    if (operator === 'plus') {
        hasil = parseFloat(box1) + parseFloat(box2);  // Melakukan penjumlahan
    }
    console.log('Hasil:', hasil);
    // Reset setelah perhitungan
    box1 = hasil.toString();
    box2 = '';
    operator = '';
}
