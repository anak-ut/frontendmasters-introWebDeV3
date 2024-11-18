const SECRETWORD= 'unzip';

const [a,b,c,d,e] = SECRETWORD;
//console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);
let myInput = 'unzip';
const [a1, b1,c1,d1,e1] = myInput;

const cekCharInSECRETWORD = SECRETWORD.includes(...myInput);
console.log(cekCharInSECRETWORD);

if (a===a1 && b==b1 && c==c1 && d==d1 && e==e1){
    console.log('menang .. hore !')
} else {
    console.log('kalah');
}