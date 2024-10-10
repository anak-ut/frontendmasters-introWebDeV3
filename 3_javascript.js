console.log('ini eksperiment');
// tips : taruh script js di akhir/ plg bawah html
// seolah olah itu membuat web load quickly
const monthRent = 450;
const yearRent = monthRent * 12;
console.log(yearRent);

// --- numbers, strings, booleans

// string
const myName = 'hehe';
console.log(myName);
const kata = 'don\'t do that'
const kalimat = '\n baca buku berjudul \"titanic\" '
// pake escape backslash agar utk string tertentu sprti ', ''
// kalo ga pake escape backslash, ' pada don't akan dianggap akhir dr string
// \n adalah escape untuk enter (ganti baris)
console.log(kata, kalimat)
// memakai backtics ``
let jaman = 2075;
let kelahiran = 1969;
console.log(`nenek saya berumur ${jaman - kelahiran} tahun`);
console.log(`don't do that !!`);

//boolean
let awal = true;
console.log(awal);
console.log(!awal);
let value = 12;
let latinValue = '12'
console.log(` 12 == '12' is ${value==latinValue} and 2 === '2' is ${value===latinValue}`)

//number
// jika bahasa laen memisahkan antara floatong dan integer,
// javascript hanya

// --- control flow

let isSkyBlue = true;

if (isSkyBlue){
    console.log('maknyosss')
    console.log(`sky is blue ...`);
} else {
    console.log('ngowaor rek');
}

const friendsAtParty = 3                                                   ;

if (friendsAtParty ===0){
    console.log('look i owe my own nachos');
} else if (friendsAtParty <= 4){
    console.log('pas dapet nasi brkat aja');
} else {
    console.log('idupin myusikkkkkk ~')
}

// Loops
// while loop

let mobil = 0;
while (mobil <12){
    console.log(`mobil ke ${mobil}`);
    mobil++;
}

// for loop
let gerobak = 10;
for (let i=10;i>1;i--){
    gerobak--;
    console.log(`gerobak ke- ${gerobak}`)
}


// --- Function
// a bit reusable code
// template juga

function addTwo(number){
    return number +2;
}
let answer = addTwo(0);
console.log(answer);

let kec = 'peudawa';
let kab = 'aceh timur';
let prov = 'aceh';

function mentionLokasi(l1,l2,l3){
    console.log(`saya tinggal di ${l1},${l2}, provinsi ${l3}`);
}

mentionLokasi(kec,kab,prov); // tidak usah console.log lagi karna di dalam fungsi sudah ada

// cara nulis function


// #1 fungsi biasa- declaration function
function meong(){
    console.log(' miau miau miau miauuuuu');
}
meong();

// #2 fungsi tanpa nama- express function
// anonimus tanpa membuat nama fungsi
// fungsi tanpa nama td dmasukkan ke dalam variabel
let petok = function(){
    console.log('tok petok petok');
}
petok();

// #3 arrow function
// seperti express funct tapi pake arrow dan hapus keyword function
// step : hapus keyword 'function', tambahkan panah => setelah parameter
let gukguk = ()=> {
    console.log('guk guk');
}

gukguk();

// --- Scope

// contoh:
function addFive(number){
    const someVar = 'you cannot see this outside this funct';
    console.log(someVar);
    return number + 5;
}

console.log(addFive(1));
// console.log(someVar); // error not define - di dalam curly brace
// { } adalah scope

// panggil variabel sblm deklare, sebabkan error

/*

console.log(here);
let here = 'disini : idn'

*/

// referenceError
// tetapi tidak berlaku ke fungsi(biasa),
// keganjilan ini disebut hoisting

// hoisting

sayHalo();
function sayHalo(){
    console.log('halo halooo')
}

// automatically kita bisa panggil fungsi sblm fungsi dideklare


// --- Built-ins
// lots of function yang sudah ada di dalam javascript(js machine)

// contoh:
const kalimats = 'ThIs HaS weiRd CaSiNg On It';
const toLower = kalimats.toLowerCase();
const toUpper = kalimats.toUpperCase();
console.log(toLower);
console.log(toUpper);

let numberss = 1234.543452
let result = Math.round(numberss)
console.log(result)