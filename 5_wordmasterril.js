const ANSWERLEN = 5;
const ROUNDS = 3;
const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');

// koleksi fungsi2 yang dipanggil oleh init() :

// deteksi dan buat objek key value letter-frekuensi
// sifat objek : key selalu unik.
function makeMap(array){
    const obj = {};
    for (let i=0;i<array.length;i++){
        if (obj[array[i]]) {
            obj[array[i]]++;
        } else {
            obj[array[i]]=1;
        }
    }
    return obj;
}

// function alphabet checker letter using reges
function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
}


// load the spinning ( disini dah diganti mobil maju mundur)
function setLoading(isLoading){
    loadingDiv.classList.toggle('hidden',!isLoading)
}


// ------------------------------------------------- //

async function init(){
    let currentRow = 0;
    let currentGuess = '';
    let done = false;
    let isLoading = true;

    // send req to API
    const res = await fetch('https://words.dev-apis.com/word-of-the-day');
    const result = await res.json();
    const wordGuess = result['word'].toUpperCase();
    const wordGuessParts = wordGuess.split('');
    console.log(wordGuessParts);
    isLoading = false;
     setLoading(isLoading);

    // users do guess per letter
    function addLetter(letter){
        if (currentGuess.length < ANSWERLEN){
            currentGuess += letter;
        } else {
           let current = currentGuess.substring(0,currentGuess.length-1)+letter;
        }
        letters[currentRow * ANSWERLEN + currentGuess.length -1].innerText = letter;
    }

    // try to enter a guess
    function commit(){
        if (currentGuess.length != ANSWERLEN){
            return;
        }
    }

    const guessParts = currentGuess.split('');
    const map = makeMap(wordParts);
    let allRight = true;

// check correct letters pass#1
for(let i=0;i<ANSWERLEN;i++){
    if(guessParts[i] === wordGuessParts[i] ){
        letters[currentRow * ANSWERLEN + 1].classList.add('correct');
        map[guessParts[i]]--;
    }
}

// pass#2 using map
for (let i=0;i<ANSWERLEN;i++){
    if(guessParts[i] === wordGuessParts[i]){
        // huruf guess tepat. do nothing
    } else if(map[guessParts[i]] && map[guessParts[i]] > 0){
        // tebakan hampir. diiterasi cekingnya sampe counter = 0
        allRight = false;
        letters[currentRow * ANSWERLEN + i].classList.add('close');
        map[guessParts[i]]--;
    } else {
        //wrong
        allRight=false;
        letters[currentRow * ANSWERLEN + i].classList.add('wrong');
    }
}























































}
