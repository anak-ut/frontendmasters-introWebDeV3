const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

// I like to do an init function so I can use "await"
async function init() {
  // the state for the app
  let currentRow = 0;
  let currentGuess = "";
  let done = false;
  let isLoading = true;

  // nab the word of the day
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const { word: wordRes } = await res.json();
  const word = wordRes.toUpperCase();
  const wordParts = word.split("");
  isLoading = false;
  setLoading(isLoading);

  // user adds a letter to the current guess
  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      current = currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText =
      letter;
  }

  // use tries to enter a guess
  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      // do nothing
      return;
    }
    currentRow++;
  updateUI(); // Panggil updateUI di sini
    // check the API to see if it's a valid word
    // skip this step if you're not checking for valid words
    isLoading = true;
    setLoading(isLoading);
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });
    const { validWord } = await res.json();
    isLoading = false;
    setLoading(isLoading);

    // not valid, mark the word as invalid and return
    if (!validWord) {
      markInvalidWord();
      return;
    }

    const guessParts = currentGuess.split("");
    const map = makeMap(wordParts);
    let allRight = true;

    function updateUI() {
      // Clear the current row
      for (let i = 0; i < ANSWER_LENGTH; i++) {
        const currentRowLetter = letters[currentRow * ANSWER_LENGTH + i];
        currentRowLetter.innerText = "";
        currentRowLetter.classList.remove("invalid", "correct", "close", "wrong");
      }
    }
      // Update the previous row with the results of the guess
      if (currentRow > 0) {
        const previousRow = currentRow - 1;
        const guessArray = currentGuess.split('');
        const wordArray = word.split('');
        const letterState = {};

    // First pass: Mark correct letters
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      const letterElement = letters[previousRow * ANSWER_LENGTH + i];
      const guessedLetter = guessArray[i];
      
      if (guessedLetter === wordArray[i]) {
        letterElement.classList.add("correct");
        letterState[i] = "correct";
        wordArray[i] = null; // Mark this letter as used
      }
    }

    // Second pass: Mark close and wrong letters
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      if (letterState[i]) continue; // Skip already marked correct letters

      const letterElement = letters[previousRow * ANSWER_LENGTH + i];
      const guessedLetter = guessArray[i];
      
      const indexInWord = wordArray.indexOf(guessedLetter);
      if (indexInWord !== -1) {
        letterElement.classList.add("close");
        wordArray[indexInWord] = null; // Mark this letter as used
      } else {
        letterElement.classList.add("wrong");
      }
    }

    // Update the display for the previous guess
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[previousRow * ANSWER_LENGTH + i].innerText = guessArray[i];
    }
  }

  // Reset currentGuess for the next round
  
  //currentRow++;
  currentGuess = "";

    if (allRight) {
      // win
      alert("you win");
      document.querySelector(".brand").classList.add("winner");
      done = true;
    } else if (currentRow === ROUNDS) {
      // lose
      alert(`you lose, the word was ${word}`);
      done = true;
    }
  }

  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[currentRow * ANSWER_LENGTH + currentGuess.length].innerText = "";
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  function markInvalidWord() {
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");

      // long enough for the browser to repaint without the "invalid class" so we can then add it again
      setTimeout(
        () => letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid"),
        10
      );
    }
  }

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  document.addEventListener("keydown", function handleKeyPress(event) {
    if (done || isLoading) {
      // do nothing;
      return;
    }

    const action = event.key;

    if (action === "Enter") {
      commit();
    } else if (action === "Backspace") {
      backspace();
    } else if (isLetter(action)) {
      addLetter(action.toUpperCase());
    } else {
      // do nothing
    }
  });
}

// a little function to check to see if a character is alphabet letter
// this uses regex (the /[a-zA-Z]/ part) but don't worry about it
// you can learn that later and don't need it too frequently
function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

// show the loading spinner when needed
function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

// takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
// an object out of it (like {E: 2, L: 1, T: 1}) so we can use that to
// make sure we get the correct amount of letters marked close instead
// of just wrong or correct
function makeMap(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }
  return obj;
}

init();