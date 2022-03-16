const lastNumber = document.getElementById("lastNumber");
const myNumber = document.getElementById("myNumber");
const button = document.querySelector("button");
const span = document.getElementById("here");
const result = document.getElementById("result");

function playGame(event) {
  event.preventDefault();
  const random = Math.ceil(Math.random() * lastNumber.value);
  span.innerText = "You chose: " + myNumber.value + " machine chose: " + random;
  if (myNumber.value >= random) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

button.addEventListener("click", playGame);
