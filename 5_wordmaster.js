const SECRETWORD = 'unzip';
const parsedSECRETWORD = [...SECRETWORD];

let myInput = 'zipon';

function cekWord(huruf) {
    let newHuruf = [...huruf];
   if (newHuruf.join('') === SECRETWORD){
    return 'tebakan benar. ANDA Menang !!'
   } else {
    let result = [];
    for (let i=0;i<5;i++){
        if (newHuruf[i] === parsedSECRETWORD[i]){
            result.push(`${newHuruf[i]} <green>`);
        } else if (parsedSECRETWORD.includes(newHuruf[i])){
            result.push(`${newHuruf[i]} <yellow>`);
        } else {
            result.push(`${newHuruf[i]} XXX`)
        }
    }
    return result;
   }
}

let testing = cekWord(myInput);
console.log(testing);