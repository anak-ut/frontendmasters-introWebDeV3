const SECRETWORD = 'unzip';
const parsedSECRETWORD = [...SECRETWORD];

let myInput = 'konto';

function cekWord(huruf) {
    let newHuruf = [...huruf];
   if (newHuruf.join('') === SECRETWORD){
    return 'tebakan benar. ANDA Menang !!'
   } else {
    let result = [];
    for (let i=0;i<5;i++){
        if (newHuruf[i] === parsedSECRETWORD[i]){
            result.push(`huruf ${newHuruf[i]} tepat di posisi ${i+1}`);
        } else if (parsedSECRETWORD.includes(newHuruf[i])){
            result.push(`huruf ${newHuruf[i]} ada dalam tebakan`);
        } else {
            result.push(`huruf ${newHuruf[i]} salah`)
        }
    }
    return result;
   }
}

let testing = cekWord(myInput);
console.log(testing);