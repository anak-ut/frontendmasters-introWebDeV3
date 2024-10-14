// -- DOM

// DOM merepresentasikan halaman web.
// cara JS berinteraksi dengan html dan css = DOM
// DOM berisi banyak objek dan method yg dapat dipanggil pakai js utk mempengaruhi html css
// window adalah part dari DOM

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
   // elementNow.innerText = 'koniciwa dengan javascript'; 
    elementNow.innerText = `koniciwa dengan javascript ${i}`; 

};

// --- Adding events dan listeners

// pada interaksi web, kita menunggu user utk bertindak sesuatu. 
// tindakan tsb = event

// contoh : event mouse
let tombol = document.querySelector('.tombol');
// kita tambah listener
tombol.addEventListener('click',function(){
    let timeStamp = Date.now();
    //let minuteStamp = timeStamp.getMinutes()
    let convertMinutes = 1000*60;
    console.log('yehehe', timeStamp/convertMinutes);
})

// contoh event: type
let typingbar = document.querySelector('.typingbar');
let display = document.querySelector('.display');
typingbar.addEventListener('keyup', function(){
    display.innerText = typingbar.value;
})

// change square color part 2
let kotak = document.querySelector('.square');
let typecolor = document.querySelector('.type-color');

typecolor.addEventListener('keyup', function(){
    kotak.style.backgroundColor = typecolor.value;
})

// --- event delegation

// daripada menaruh listener di tiap tiap element, taruh saja di parentnya
// event bubblin : ketika event mengenai elemen, dia akan merambat naik ke parent, ke parent diatasnya lagi, dan sampai ke elemen utama(root)
let kontainerBtn = document.querySelector('.kontainer-button');
let displayBtn = document.querySelector('.display-btn');
kontainerBtn.addEventListener('click', function(event){
    displayBtn.innerText = `yu klik tombol: ${event.target.innerText}`;
})