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

