const maxNumForm = document.querySelector("#game");
const maxNumInput = document.querySelector("#max");

const guessNumForm = document.querySelector("#guessNum");
const guessNumInput = document.querySelector("#guess");

function gameSet(event) {
  event.preventDefault();
  const choseNum = document.querySelector("h4");
  const result = document.querySelector("span");
  const randomGet = Math.ceil(Math.random() * parseInt(maxNumInput.value));
  choseNum.innerText = `You chose: ${guessNumInput.value}, the machine chose: ${randomGet}`;

  if (parseInt(guessNumInput.value) === randomGet) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost...";
  }
}

maxNumForm.addEventListener("submit", gameSet);
