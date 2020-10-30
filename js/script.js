let words = ["car", "bicycle", "train", "plane"];
let word = "";
let userLetters = [];
let placeholder = "";
let mistakes = 0;

function setCharAt(placeholder, i, letter) {
  return placeholder.substring(0, i) + letter + placeholder.substring(i + 1);
}

function showLetter(letter) {
  // loop over word and set the letter in placeholder where the letter is located in the word

  for (var i = 0; i < word.length; i++) {
    console.log((word[i] == letter) + " " + word[i]);
    if (word[i] == letter) {
      placeholder = setCharAt(placeholder, i, letter);
      console.log(placeholder[i]);
    }
  }
  setPlaceholder();
  if (!placeholder.includes("-")) {
    youWon();
  }
}

function registerMistake() {
  mistakes++;
  console.log(mistakes);
  if (mistakes == 1) {
    document.querySelector("figure").classList.add("scaffold");
  } else if (mistakes == 2) {
    document.querySelector("figure").classList.add("head");
  } else if (mistakes == 3) {
    document.querySelector("figure").classList.add("body");
  } else if (mistakes == 4) {
    document.querySelector("figure").classList.add("arms");
  } else if (mistakes == 5) {
    document.querySelector("figure").classList.add("legs");
    console.log("correct word was :" + word);
    gameOver();
  }
}

function youWon() {
  document.querySelector("#win").classList.toggle("show");
}

function gameOver() {
  document.querySelector("#lose").classList.toggle("show");
}

function setPlaceholder() {
  document.getElementById("display").innerHTML = placeholder;
  console.log("placeholder is " + placeholder);
}

function startGame() {
  // 1- select word for the game
  let index = Math.floor(Math.random() * words.length);
  word = words[index];
  document.getElementById("correct-word").innerHTML = "word was :" + word;

  console.log("The word to guess is " + word);

  //2- make sure the userLetters and mistakes are empty
  userLetters = [];
  mistakes = 0;

  //3- Make a placeholer for the word
  placeholder = "";
  for (var i = 0; i < word.length; i++) {
    placeholder = placeholder + "-";
  }
  setPlaceholder();

  document.addEventListener("keyup", function (event) {
    let letter = event.key.toLocaleLowerCase();

    console.log(letter);
    if (userLetters.includes(letter)) {
      console.log("Already pressed");
    } else {
      if (word.includes(letter)) {
        console.log("in word");
        showLetter(letter);
      } else {
        console.log("NOT in word");
        registerMistake();
      }
      userLetters.push(letter);
      console.log(userLetters);
    }
  });
}

document.querySelector("#start").addEventListener("click", function () {
  document.querySelector(".greeting").classList.add("hide");
  document.querySelector(".ghost").classList.add("hide");
  document.querySelector(".display").classList.toggle("hide");

  startGame();
});
