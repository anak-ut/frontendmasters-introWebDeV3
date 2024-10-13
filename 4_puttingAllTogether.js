// -- DOM

// cara JS berinteraksi dengan html dan css = DOM
// DOM berisi banyak objek dan method yg dapat dipanggil pakai js utk mempengaruhi html css

// mari kita coba dengan 4_dom.html, 4_dom.css

let redSquare = document.querySelector('.red-square');

redSquare.style.backgroundColor = 'blue';

// penjelasan :
/*
dengan document, kta bisa panggil dengan method utk berinteraksi dengan html dan css

document = variabel browser yang ada secara global

fakta unik :
(js camelcase) VS (css kebabcase)
apapun properti di css kebabcase maka di javascript dipanggil menjadi camelcase

contoh:

background-color (css) --> backgroundColor (js) 
*/

// contoh lain- pake innerText
let targetJS = document.querySelectorAll('.target');
for (let i=0;i<targetJS.length;i++){
    let elementNow = targetJS[i];
    elementNow.innerText = 'koniciwa dengan javascript'; 
}