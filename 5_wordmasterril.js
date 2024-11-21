const ANSWERLEN = 5;
const ROUNDS = 3;
const letters = document.querySelectorAll('.scoreboard-letter');
const loadingDiv = document.querySelector('.info-bar');

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
    // setLoading(isLoading);

    // user does guess
}
